const factory = require("./Handler")
const Room = require("../models/Room")
const asyncHandler = require("express-async-handler")


exports.getRooms = factory.getAll(Room)

exports.getRoom = factory.getOne(Room, 'Room')

exports.addRoom = factory.createModel(Room, 'Room')

exports.updateRoom = factory.updateModel(Room, 'Room')

exports.deleteRoom = factory.deleteModel(Room, 'Room')