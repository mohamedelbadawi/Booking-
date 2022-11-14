const router = require('express').Router();
const { addHotel, getHotels, getHotel, updateHotel, deleteHotel } = require('../services/HotelServices');
const { createHotelValidator, getHotelValidator, updateHotelValidator, deleteHotelValidator } = require('../utils/validator/HotelValidator');
router.route('/').post(createHotelValidator, addHotel).get(getHotels)
router.route('/:id').get(getHotelValidator, getHotel).put(updateHotelValidator, updateHotel).delete(deleteHotelValidator, deleteHotel)

module.exports = router
