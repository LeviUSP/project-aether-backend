const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
    },
    photoURL: {
        type: String,
    },
    resumeURL: {
        type: String,
    }
});

module.exports = model('User', UserSchema);
