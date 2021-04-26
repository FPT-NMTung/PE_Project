const express = require('express');
const router = express.Router();

const ErrorController = require('../controller/error.controller')

router.get('/', ErrorController.index)

module.exports = router;