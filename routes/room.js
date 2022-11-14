const router = require('express').Router();
const { addRoom, getRooms, getRoom, updateRoom, deleteRoom } = require('../services/RoomServices');
const { createRoomValidator, getRoomValidator, updateRoomValidator, deleteRoomValidator } = require('../utils/validator/RoomValidator');
router.route('/').post(createRoomValidator, addRoom).get(getRooms)
router.route('/:id').get(getRoomValidator, getRoom).put(updateRoomValidator, updateRoom).delete(deleteRoomValidator, deleteRoom)

module.exports = router
