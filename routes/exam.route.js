const express = require('express');
const router = express.Router();

const examController = require('../controller/exam.controller')

router.get('/', examController.index)

module.exports = router;