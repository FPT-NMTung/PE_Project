const express = require('express');
const router = express.Router();
const passport = require('passport')

const loginController = require('../controller/login.controller');

router.get('/', checkNotAuthenticated, loginController.index)
router.post('/', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/me',
    failureRedirect: '/login',
    failureFlash: true
}))

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

module.exports = router;