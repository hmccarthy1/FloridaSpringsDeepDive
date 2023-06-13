const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const {Schema} = require('mongoose');
const bcrypt = require("bcryptjs");
const { Springs } = require('./Spring');


const springRatingSchema = new mongoose.Schema({

    userLookup: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    springLookup: {
        type: Schema.Types.ObjectId,
        ref: 'Spring',
    },
    rating: {
        type: Number,
        max: 10
    }
},
    {timestamps: true},
    {collection: 'springRating'}
    

);

const SpringRating = mongoose.model('springRating', springRatingSchema, 'springRating');


module.exports = SpringRating;