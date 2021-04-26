const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Course = new Schema(
    {
        idProblem: String,
    }, 
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Course', Course);