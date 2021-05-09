const express = require('express');
const router = express.Router();
const passport = require('passport')
const { checkNotAuthenticated } = require('./checkLogin')

const forgotPassword = require('../controller/forgotPassword.controller');

router.get('/', checkNotAuthenticated, forgotPassword.index)

module.exports = router;