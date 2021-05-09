const login = require('./login.route')
const register = require('./register.route')
const forgotPassword = require('./forgotPassword.route')
const site = require('./site.route')
const logout = require('./logout.route')
const error = require('./error.route')
const course = require('./course.route')
const Exam = require('./exam.route')
const authLoginGoogle = require('./auth.google.route')
const authLoginFacebook = require('./auth.facebook.route')

function routes(app) {
    app.use('/auth/facebook', authLoginFacebook);
    app.use('/auth/google', authLoginGoogle);
    app.use('/logout', logout)
    app.use('/login', login)
    app.use('/register', register)
    app.use('/forgot-password', forgotPassword)
    app.use('/course', course)
    app.use('/exam', Exam)
    app.use('/', site)
    app.use('*', error)
}

module.exports = routes;