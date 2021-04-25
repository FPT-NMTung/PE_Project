const login = require('./login.route')
const register = require('./register.route')
const site = require('./site.route')
const logout = require('./logout.route')

function routes(app) {
    app.use('/logout', logout)
    app.use('/login', login)
    app.use('/register', register)
    app.use('/', site)
}

module.exports = routes;