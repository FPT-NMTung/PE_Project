const express = require('express')
const router = express.Router()
const { checkAuthenticated } = require('./checkLogin')

const LogoutController = require('../controller/logout.controller')

router.get('/', checkAuthenticated, LogoutController.index)

module.exports = router
