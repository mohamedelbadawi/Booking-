const { check } = require('express-validator')
const { validatorMiddleware } = require('../../middlewares/validationMiddleware')

exports.createHotelValidator = [
    check('name').exists().notEmpty(),
    check('city').exists().notEmpty(),
    check('type').exists().notEmpty(),
    check('address').exists().notEmpty().isString(),
    check('stars').exists().notEmpty().isNumeric(),
    validatorMiddleware
]

exports.getHotelValidator = [
    check('id').exists().isMongoId(), validatorMiddleware
]
exports.updateHotelValidator = [
    check('id').exists().isMongoId(),
    validatorMiddleware
]


exports.deleteHotelValidator = [
    check('id').exists(),
    validatorMiddleware
]