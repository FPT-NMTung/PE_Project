const Course = require('../model/Course')
const Account = require('../model/Account')
const { mutipleMongooseToObject, mongooseToObject } = require('../model/convert/convert')

class CoursesController {
    index(req, res, next) {
        // get all courses        
        Account.findById(req.user.id)
            .then((account) => {
                Course.find({})
                    .then((course) => {
                        let convert = mutipleMongooseToObject(course);
                        convert.forEach(element => {
                            if (account.idCourse.includes(element.idCourse)) {
                                element['isSubscribe'] = true
                            } else {
                                element['isSubscribe'] = false
                            }
                        });
                        res.render('course', {
                            userId: req.user.id,
                            fullname: account.fullname,
                            courses: convert
                        })
                    })
                    .catch()
            })
            .catch()
    }
    detail(req, res, next) {
        Account.findById(req.user.id)
            .then((account) => {
                Course.findOne({ idCourse: req.params.slug })
                    .then((course) => {
                        let convert = mongooseToObject(course)
                        if (account.idCourse.includes(convert.idCourse)) {
                            convert['isSubscribe'] = true;
                        } else {
                            convert['isSubscribe'] = false;
                        }
                        if (course == null) {
                            res.render('404')
                        } else {
                            res.render('detailCourse', {
                                userId: req.user.id,
                                fullname: req.user.fullname,
                                course: convert,
                            })
                        }
                    })
                    .catch()
            })
            .catch()
    }
    learn(req, res, next) {
        Course.findOne({ idCourse: req.params.slug })
            .then((course) => {
                if (course == null) {
                    res.render('404')
                } else {
                    res.render('learnCourse', {
                        userId: req.user.id,
                        fullname: req.user.fullname,
                        course: mongooseToObject(course)
                    })
                }
            })
            .catch()
    }
    subscribe(req, res, next) {
        Account.findByIdAndUpdate(req.user.id, {
            $push: { 'idCourse': req.body.id }
        }, (err, raw) => {
            res.redirect('/course/' + req.body.id)
        })
    }
}

module.exports = new CoursesController()