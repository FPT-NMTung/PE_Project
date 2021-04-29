class AuthLoginController {
    authGoogleCB(req, res, next) {
        console.log(req.user);
    }
}

module.exports = new AuthLoginController();