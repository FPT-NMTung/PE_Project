const express = require('express');
const router = express.Router();
const { checkAuthenticated } = require('./checkLogin')

const CoursesController = require('../controller/course.controller')

router.get('/:slug/learn', checkAuthenticated, CoursesController.learn)
router.get('/:slug', checkAuthenticated, CoursesController.detail)
router.get('/', checkAuthenticated, CoursesController.index)

module.exports = router;