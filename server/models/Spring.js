const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const {Schema} = require('mongoose');
require('mongoose-money');
var Money = require('moneyjs');

mediaSchema = new mongoose.Schema({
    imageURL: {
        type: String,
        required: true
    },
    Caption: {
        type: String
    }
});


const amenityReviewsSchema = new mongoose.Schema({
    reviewText: {
        type: String,
        required: true
    },
    reviewMedia: {
        type: [String],
        
    },
    amenityRating: {
        type: Schema.Types.Decimal128,
        required: true
    },
    postingUser: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})


const amenitySchema = new mongoose.Schema({
    amenityType: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'amenityTypeChoices' 
        },
    amenityDescription: {
        type: String, 
        required: true
    },
    Cost: {
        type: String, 
        
    },
    amenityReviews: [amenityReviewsSchema],
    amenityMedia: [mediaSchema],
    amenityWebsite: {
        type: String
    }


});


const springReviewSchema = new mongoose.Schema({
    reviewText: {
        type: String,
        required: true
    },
    springRating: {
        type: Schema.Types.Decimal128,
    },
    reviewMedia: [String],
    postingUser: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

const springSchema = new mongoose.Schema({
    springName: {
        type: String,
        unique: true,
        required: true
    },
    latitude: {
        type: Schema.Types.Decimal128, 
        required: true,
    },
    longitude: {
        type: Schema.Types.Decimal128, 
        required: true,
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
        required: true
    }, 
    amenities: [amenitySchema],
    springReviews: [springReviewSchema],
    springMedia: [mediaSchema],
    address: {
        type: String,
        required: true
    },
    admission: {
        type: String,
        required: true
    }

});




const Springs = mongoose.model('Springs', springSchema, 'Springs');

module.exports = Springs;



