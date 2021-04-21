class MeController {
    index(req, res, next) {
        res.render('me')
    }
}

module.exports = new MeController()