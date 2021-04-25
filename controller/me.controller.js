const Account = require('../model/Account')

class MeController {
    index(req, res, next) {
        res.render('home')
    }
}

module.exports = new MeController()