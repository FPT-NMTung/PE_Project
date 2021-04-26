const LocalStrategy = require('passport-local').Strategy
const Account = require('./model/Account')
// const bcrypt = require('bcrypt')

function initialize(passport) {
	const authenticateUser = (email, password, done) => {
		Account.findOne({ email: email })
			.then((account) => {
				if (account == null) {
					console.log('The email address you entered isn\'t connected to an account.')
					return done(null, false, { message: 'The email address you entered isn\'t connected to an account.' })
				}

				try {
					if (password === account.password) {
						return done(null, account)
					} else {
						return done(null, false, { message: 'The password that you\'ve entered is incorrect.' })
					}
				} catch (e) {
					return done(e)
				}
			})
			.catch()
	}

	passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser))

	passport.serializeUser((account, done) => done(null, account.id))
	passport.deserializeUser((id, done) => {
		Account.findOne({ _id: id })
			.then((account) => {
				return done(null, {
					id: account._id,
					fullname: account.fullname,
				})
			})
			.catch()
	})
}

module.exports = initialize