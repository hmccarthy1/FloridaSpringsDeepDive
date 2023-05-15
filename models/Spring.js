const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const {Schema} = require('mongoose');
require('mongoose-money');
var Money = require('moneyjs');

const amenityReviewsSchema = new mongoose.Schema({
    reviewText: {
        type: String,
        maxLength: 1000,
        required: true
    },
    reviewMedia: {
        type: [String],
        
    },
    amenityRating: {
        type: Schema.Types.Decimal128,
        maxLength: 2
    },
    postingUser: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})


const amenitySchema = new mongoose.Schema({
    amenityType: {
        type: String,
        required: true 
        },
    amenityDescription: {
        type: String, 
        maxLength: 1000,
        required: true
    },
    cost: {
        type: Schema.Types.Money, 
        
    },


});




const springSchema = new mongoose.Schema({
    springName: {
        type: String,
        maxLength: 100,
        unique: true,
        required: true
    },
    latitude: {
        type: mongoose.Decimal128, 
        required: true,
        maxLength: 100
    },
    longitude: {
        type: mongoose.Decimal128, 
        required: true,
        maxLength: 100
    },
    springState: {
        required: true,
        type: String,
    },
    springCounty: {
        type: String,
        required: true
    },
    springDescription: {
        type: String, 
        maxLength: 1000,
        required: true
    }, 
    amenities: [amenitySchema],
    springReviews: [springReviewSchema],
    springMedia: [String]

});




const Springs = mongoose.model('Springs', springSchema, 'Springs');

module.exports = Springs;



