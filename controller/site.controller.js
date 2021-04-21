class SiteController {
    index(req, res, next) {
        res.render('home')
    }

    me(req, res, next) {
        res.render('me')
    }
}

module.exports = new SiteController()