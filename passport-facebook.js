const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy;
const Account = require('./model/Account')

passport.use(new FacebookStrategy({
    clientID: '291466392436084',
    clientSecret: '290a8bad876b6a239e201d813223366c',
    callbackURL: "http://localhost:3000/auth/facebook/callback",
    profileFields: ['id', 'emails', 'name'],
},
    function (accessToken, refreshToken, profile, done) {

        let email = profile.emails[0].value
        Account.findOne({ email: email })
            .then((account) => {
                if (account) {
                    return done(null, account)
                } else {
                    const genaral = {
                        fullname: profile.name.familyName + " " + profile.name.middleName + " " + profile.name.givenName,
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