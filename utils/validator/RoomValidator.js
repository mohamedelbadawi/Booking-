const { check } = require('express-validator')
const { validatorMiddleware } = require('../../middlewares/validationMiddleware')
const Hotel = require('../../models/Hotel')
exports.createRoomValidator = [
    check('number').exists().notEmpty(),
    check('hotel').exists().notEmpty().isMongoId().custom(async (val) => {
        const hotel = await Hotel.findById(val)
        if (!hotel) {
            throw new Error("this id do not belong to a hotel")
        }
        return true
    }),
    check('type').exists().notEmpty(),
    check('price').exists().notEmpty().isString(),
    check('maxGuests').exists().notEmpty().isNumeric(),
    validatorMiddleware
]

exports.getRoomValidator = [
    check('id').exists().isMongoId(), validatorMiddleware
]
exports.updateRoomValidator = [
    check('id').exists().isMongoId(),
    validatorMiddleware
]


exports.deleteRoomValidator = [
    check('id').exists(),
    validatorMiddleware
]