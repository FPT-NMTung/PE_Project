const Account = require('../model/Account')

class RegisterController {
    index(req, res, next) {
        res.render('login', {
            title: 'Register Page',
            isRegisterPage: true
        })
    }

    register(req, res, next) {
        console.log(req.body.email)
        console.log(req.body.password)

        // console.log(req)

        // check existing account
        Account.findOne({ email: req.body.email })
            .then((select) => {
                if (select == null) {

                    if (req.body.password != req.body.rePassword) {
                        res.json({
                            notMatchPass: true
                        })
                    }

                    const regex = new RegExp('(?=.{8,})(?=.*[A-Z])');

                    if (!regex.test(req.body.password)) {
                        res.json({
                            notFollowPass: true
                        })
                    }

                    // create new object
                    const genaral = {
                        fullname: req.body.fullname,
                        email: req.body.email,
                        password: req.body.password,
                        coursesId: []
                    }

                    // add new account
                    const newAccount = new Account(genaral)
                    newAccount.save()

                    res.json({
                        registerSuccess: true
                    })
                } else {
                    res.json({
                        existEmail: true
                    })
                }
            })
            .catch()
    }
}

module.exports = new RegisterController();