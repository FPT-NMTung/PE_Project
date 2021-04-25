class LogoutController {
    index(req, res, next) {
        req.logOut()
        res.redirect('/')
    }
}

module.exports = new LogoutController()