class SiteController {
    index(req, res, next) {
        res.render('home')
    }

    me(req, res, next) {
        res.render('me', {
            userId: req.user.id,
        })
    }
}

module.exports = new SiteController()