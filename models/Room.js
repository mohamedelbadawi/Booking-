const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
    number: {
        type: String,
        required: true
    },
    Hotel: {
        type: Object.Schema.ObjectId,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    maxGuests: {
        type: Number,
        min: [1, 'the guests must be between 1 and 3 '],
        max: [3, 'the guests must be between 1 and 3 ']
    },
}, { timestamps: true })

const Room = mongoose.model('Room', roomSchema)
module.exports = Room
