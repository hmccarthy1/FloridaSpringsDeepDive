const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};


const userSchema = new mongoose.Schema({

    username: {
        type: String, 
        required: [true, "a username is required"],
        unique: true,
        trim: true
    },

    password: {
        type: String, 
        required: true,
        minLength: 8,
        maxLength: 20
    }, 

    email: {
        type: String,
        required: true,
        unique: true,
        validate: [validateEmail, 'Please fill a valid email address'],
    },



},
{timestamps: true},
{collection: 'User'}
);





const User = mongoose.model('User', userSchema, 'User');




module.exports = User;


