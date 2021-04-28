const Course = require('../model/Course')
const Account = require('../model/Account')

const {mutipleMongooseToObject} = require('../model/convert/convert')

class SiteController {
    index(req, res, next) {
        res.render('home')
    }

    me(req, res, next) {
        Account.findById(req.user.id)
        .then((account) => {
            Course.find()
            .then((course) => {
                let courses = course.filter((elem) => {
                    return account.idCourse.includes(elem.idCourse)
                })
                res.render('me', {
                    userId: req.user.id,
                    fullname: account.fullname,
                    courses: mutipleMongooseToObject(courses),
                })              
            })
            .catch()
        })
        .catch()
    }
}

module.exports = new SiteController()