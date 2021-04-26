class ErrorController {
    index(req, res, next) {
        res.status(404)
        res.send('Render 404 Not Found Page !!!')
    }
}

module.exports = new ErrorController()