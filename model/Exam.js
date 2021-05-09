const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Exam = new Schema(
    {
        examCode: String,
        questions: Array,
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Exam', Exam);