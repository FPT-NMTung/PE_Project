const Course = require('../model/Course')
const { mutipleMongooseToObject, mongooseToObject } = require('../model/convert/convert')

class CoursesController {
    index(req, res, next) {
        // get all courses
        Course.find({})
            .then((course) => {
                res.render('course', {
                    userId: req.user.id,
                    fullname: req.user.fullname,
                    courses: mutipleMongooseToObject(course)
                })
            })
            .catch()

    }
    detail(req, res, next) {
        Course.findOne({ idProblem: req.params.slug })
            .then((course) => {
                if (course == null) {
                    res.send('Render 404 Not Found Page !!!')
                }
                res.render('detailCourse', {
                    userId: req.user.id,
                    fullname: req.user.fullname,
                    course: mongooseToObject(course)
                })
            })
            .catch()
    }
    learn(req, res, next) {
        Course.findOne({ idProblem: req.params.slug })
            .then((course) => {
                if (course == null) {
                    res.send('Render 404 Not Found Page !!!')
                }
                res.render('learnCourse', {
                    userId: req.user.id,
                    fullname: req.user.fullname,
                    course: mongooseToObject(course)
                })
            })
            .catch()
    }
}

module.exports = new CoursesController()