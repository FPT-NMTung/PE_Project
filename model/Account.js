const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Account = new Schema(
    {
        fullname: String,
        email: String,
        password: String,
        idCourse: Array,
    }, 
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Account', Account);