const express = require('express');
const router = express.Router();
const passport = require('passport')
require('../google-passport')
const { checkNotAuthenticated } = require('./checkLogin')

const AuthLoginController = require('../controller/auth.login.controller')

// router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }))
// router.get('/google', checkNotAuthenticated, passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }))

router.get('/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect success.
        res.redirect('/me')
    });

module.exports = router;