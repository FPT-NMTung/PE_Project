class Login {
    index(req, res, next) {
        res.render('login')
    }
}

module.exports = new Login();