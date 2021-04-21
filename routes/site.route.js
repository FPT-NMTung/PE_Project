const express = require('express');
const router = express.Router();
const { checkAuthenticated } = require('./checkLogin')

const siteController = require('../controller/site.controller')

router.get('/me', checkAuthenticated, siteController.me)
router.get('/', siteController.index)

module.exports = router