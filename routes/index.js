const login = require('./login.route')
const register = require('./register.route')
const site = require('./site.route')
const logout = require('./logout.route')
const error = require('./error.route')

function routes(app) {
    app.use('/logout', logout)
    app.use('/login', login)
    app.use('/register', register)
    app.use('/', site)
    app.use('*', error)
}

module.exports = routes;