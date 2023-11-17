const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = Schema({
    username: {
        type: String,
        required: [true, "please add username"]
    },
    email: {
        type: String,
        required: [true, "please add email"],
        unique: [true, "this email has already taken"]
    },
    password: {
        type: String,
        required: [true, "please add password"]
    }
}, {
    timestamps: true
});

const Users = mongoose.model('Users', UserSchema);

module.exports = Users;