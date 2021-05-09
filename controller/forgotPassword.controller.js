const { Model } = require("mongoose")

class ForgotPassword {
    index(req, res, next) {
        res.render('forgotPassword')
    }
}

module.exports = new ForgotPassword()