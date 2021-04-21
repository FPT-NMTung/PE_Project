const Account = require('../model/Account')

class RegisterController {
    index(req, res, next) {
        res.render('register')
    }

    register(req, res, next) {
        console.log(req.body.email)
        console.log(req.body.password)

        // check existing account
        Account.findOne({ email: req.body.email })
            .then((select) => {
                if (select == null) {

                    // create new object
                    const genaral = {
                        password: req.body.email,
                        email: req.body.password,
                    }

                    // add new account
                    const newAccount = new Account(genaral)
                    newAccount.save()

                    res.redirect('/login')
                } else {
                    res.render('register')
                }
            })
            .catch()
    }
}

module.exports = new RegisterController();