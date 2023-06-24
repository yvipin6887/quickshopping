const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
        fname: {
            type: String
        },
        lname: {
            type: String
        },
        username: {
            type: String
        },
        password: {
            type: String
        },
        role: {
            type: String
        }
    },{timestamp: true});

const User = mongoose.model('User', userSchema);

module.exports = User;   