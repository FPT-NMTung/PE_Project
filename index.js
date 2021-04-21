const express = require('express')
const app = express()
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const exphbs  = require('express-handlebars')
const database = require('./model/index')
const router = require('./routes')
const initializePassport = require('./passport-config')
initializePassport(passport)
database.connect();
const users = []

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.urlencoded({ extended: false }))
app.use(flash())
app.use(session({
	secret: 'aoisdjaoidjaowijdaod',
	resave: false,
	saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
// app.use(methodOverride('_method'))

router(app)

// app.get('/', checkAuthenticated, (req, res) => {
// 	res.render('home')
// })

// app.get('/login', checkNotAuthenticated, (req, res) => {
// 	res.render('login')
// })

// app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
// 	successRedirect: '/',
// 	failureRedirect: '/login',
// 	failureFlash: true
// }))

// app.get('/register', checkNotAuthenticated, (req, res) => {
// 	res.render('register.ejs')
// })

app.post('/register', checkNotAuthenticated, async (req, res) => {
	try {
		// const hashedPassword = await bcrypt.hash(req.body.password, 10)
		users.push({
			id: Date.now().toString(),
			name: req.body.name,
			email: req.body.email,
			password: req.body.password
		})
		res.redirect('/login')
	} catch {
		res.redirect('/register')
	}
})

app.post('/logout', (req, res) => {
	req.logOut()
	res.redirect('/login')
})

function checkAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {
		return next()
	}

	res.redirect('/login')
}

function checkNotAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {
		return res.redirect('/')
	}
	next()
}

app.listen(3000)