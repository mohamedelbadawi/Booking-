const mongoose = require('mongoose');

const HotelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    city: { type: String, required: true },
    address: { type: String, required: true },
    stars: {
        type: Number, required: true,
        min: [1, "the hotel must be between 1 and 5 stars"],
        max: [5, "the hotel must be between 1 and 5 stars"]
    },
    images: {
        type: [String],
    },
    description: {
        type: String,
    },
    featured: {
        type: Boolean,
        default: false
    },
    ratingsAverage: {
        type: Number,
        min: [1, "Rating must above or equal 1"],
        max: [5, "can't be more than 5"]
    },
    ratingsNumber: {
        type: Number,
        default: 0
    }

}, { timestamps: true })

const Hotel = mongoose.model('Hotel', HotelSchema);
module.exports = Hotel
