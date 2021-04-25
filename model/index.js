const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://user_website:NMTung88644264@cluster0.nyv2d.mongodb.net/dev-pe-project?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connect successfully!!!');
    } catch (e) {
        console.log('Connect failure!!!');
    }
}

module.exports = { connect };