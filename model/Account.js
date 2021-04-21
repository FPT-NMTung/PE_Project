const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Account = new Schema(
    {
        password: String,
        email: String,
    }, 
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Account', Account);