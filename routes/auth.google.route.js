const express = require('express');
const router = express.Router();
const passport = require('passport')
require('../passport-google')

router.get('/',
    passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect success.
        res.redirect('/me')
    });

module.exports = router;