const express = require('express')
const app = express()
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const exphbs = require('express-handlebars')
const database = require('./model/index')
const router = require('./routes')
const initializePassport = require('./passport-config')
initializePassport(passport)
database.connect();
const users = []

app.use(express.json());
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
app.use(express.static('public'))
// app.use(methodOverride('_method'))


router(app)

app.listen(3000)