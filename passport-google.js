var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const Account = require('./model/Account')

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
passport.use(new GoogleStrategy({
    clientID: '881565724011-lbmbigal74t5ivt30r8gmret3tr0bff0.apps.googleusercontent.com',
    clientSecret: 'HrHXQHf7teN-f1l6HxP_z8lq',
    callbackURL: "http://localhost:3000/auth/google/callback"
},
    function (accessToken, refreshToken, profile, done) {

        let email = profile.emails[0].value;
        Account.findOne({ email: email })
            .then((account) => {
                if (account) {
                    return done(null, account)
                } else {
                    const genaral = {
                        fullname: profile.name.familyName + " " + profile.name.givenName,
                        email: email,
                        password: null,
                        coursesId: []
                    }

                    // add new account
                    const newAccount = new Account(genaral)
                    newAccount.save()
                        .then((temp) => {
                            return done(null, temp)
                        })
                }
            })
            .catch()
    }
));