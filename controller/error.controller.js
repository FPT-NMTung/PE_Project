class ErrorController {
    index(req, res, next) {
        res.render('404')
    }
}

module.exports = new ErrorController()