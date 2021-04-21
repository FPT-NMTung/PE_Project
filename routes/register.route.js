const express = require('express');
const router = express.Router();
const { checkNotAuthenticated } = require('./checkLogin')

const RegisterController = require('../controller/register.controller')

router.get('/', checkNotAuthenticated, RegisterController.index)
router.post('/', checkNotAuthenticated, RegisterController.register)

module.exports = router