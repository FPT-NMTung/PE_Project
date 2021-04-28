const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

async function connect() {
    // connetion string : mongodb+srv://user_website:NMTung88644264@cluster0.nyv2d.mongodb.net/test?authSource=admin&replicaSet=atlas-k3ridv-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true
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