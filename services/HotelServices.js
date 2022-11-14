const factory = require("./Handler")
const Hotel = require("../models/Hotel")
const asyncHandler = require("express-async-handler")


exports.getHotels = factory.getAll(Hotel)

exports.getHotel = factory.getOne(Hotel, 'Hotel')

exports.addHotel = factory.createModel(Hotel, 'Hotel')

exports.updateHotel = factory.updateModel(Hotel, 'Hotel')

exports.deleteHotel = factory.deleteModel(Hotel, 'Hotel')