const mongoose = require('mongoose')

const userModel = new mongoose.Schema({
    email: { required: true, type: String },
    password: { required: true, type: String },
    firstName: { required: false, type: String },
    lastName: { required: false, type: String },
});

module.exports = mongoose.model('Users', userModel);