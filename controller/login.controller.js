class Login {
    index(req, res, next) {
        res.render('login', {
            title: 'Login Page',
            isRegisterPage: false
        })
    }
}

module.exports = new Login();