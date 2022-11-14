const asyncHandler = require('express-async-handler');
const { model } = require('mongoose');
const ApiError = require('../utils/ApiError')
const ApiFeatures = require('../utils/ApiFeatures')
exports.createModel = (model, modelName) => asyncHandler(async (req, res) => {
    const row = await model.create(req.body);
    return res.status(200).json({ status: 'success', msg: `${modelName} created successfully`, data: row })

})

exports.getOne = (model, modelName, populationOptions) => asyncHandler(async (req, res, next) => {
    const { id } = req.params
    const query = await model.findById(id);
    if (populationOptions) {
        query.populate(populationOptions)
    }
    const row = await query;
    if (!row) {
        return next(ApiError(`there is no ${modelName} with this ${id}`, 404));
    }
    return res.status(200).json({ status: 'success', data: row })
})

exports.updateModel = (model, modelName) => asyncHandler(async (req, res) => {
    const { id } = req.params
    const row = await model.findByIdAndUpdate(id, req.body, { new: true });
    return res.status(200).json({ status: 'success', msg: `${modelName} updated successfully`, data: row })
})

exports.deleteModel = (model, modelName) => asyncHandler(async (req, res) => {
    const { id } = req.params;
    const row = await model.findByIdAndDelete({ _id: id });
    if (!row) {
        return next(ApiError(`there is no ${modelName} with this ${id}`, 404));
    }
    return res.status(200).json({ status: 'success', msg: `${modelName} deleted successfully`, data: row });
})

exports.getAll = (model) => asyncHandler(async (req, res) => {
    const totalRows = model.countDocuments()
    let filter = {}
    if (req.filterObject)
        filter = req.filterObject
    const apiFeatures = new ApiFeatures(model.find(filter), req.query).filter().sort().paginate(totalRows);
    const { mongooseQuery, paginationResult } = apiFeatures;
    const rows = await mongooseQuery;
    return res.status(200).json({ results: rows.len, pagination: paginationResult, data: rows })
})
