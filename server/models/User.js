const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const {Schema} = require('mongoose');
const bcrypt = require("bcryptjs");


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
        minLength: [8, "Password must be at least 8 characters"],
        maxLength: [20, "Password must be at most 20 characters"]
    }, 

    email: {
        type: String,
        required: true,
        unique: true,
        validate: [validateEmail, 'Please fill a valid email address'],
    },
    firstName: {
        type: String,
        required: true,
        unique: false
    },
    lastName: {
        type: String,
        required: true,
        unique: false
    }

},
{timestamps: true},
{collection: 'User'}
);

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });


  userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };

const User = mongoose.model('User', userSchema, 'User');




module.exports = User;


