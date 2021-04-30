const express = require('express')
const router = express.Router()
const passport = require('passport')
require('../passport-facebook')

router.get('/', passport.authenticate('facebook', { scope : ['email'] }));

router.get('/callback',
    passport.authenticate('facebook', {
        successRedirect: '/me',
        failureRedirect: '/login'
    }));

module.exports = router