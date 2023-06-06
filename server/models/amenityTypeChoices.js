const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const {Schema} = require('mongoose');





amenityTypeChoicesSchema = new mongoose.Schema({
    amenityType: {
        type: String,
        required: true, 
        unique: true
    },
    amenityIconURL: {
        type: String, 
        required: true
    }
})


const amenityTypeChoices = mongoose.model('amenityTypeChoices', amenityTypeChoicesSchema, 'amenityTypeChoices' );

module.exports = amenityTypeChoices;