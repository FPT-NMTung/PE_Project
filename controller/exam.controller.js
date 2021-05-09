const Exam = require('../model/Exam')

class ExamController {
    index(req, res, next) {
        Exam.findOne({ examCode: "NWC203c_Spring2021_ME_2_751892" })
            .then((exam) => {
                // Website you wish to allow to connect
                res.setHeader('Access-Control-Allow-Origin', '*');

                // Request methods you wish to allow
                res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

                // Request headers you wish to allow
                res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

                // Set to true if you need the website to include cookies in the requests sent
                // to the API (e.g. in case you use sessions)
                res.setHeader('Access-Control-Allow-Credentials', true);
                res.json(exam)
            })
    }
}

module.exports = new ExamController()