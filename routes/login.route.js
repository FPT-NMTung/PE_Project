const express = require('express');
const router = express.Router();
const passport = require('passport')
const { checkNotAuthenticated } = require('./checkLogin')

const loginController = require('../controller/login.controller');

router.get('/', checkNotAuthenticated, loginController.index)
router.post('/', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/me',
    failureRedirect: '/login',
    failureFlash: true
}))

module.exports = router;