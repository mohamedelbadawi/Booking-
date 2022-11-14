class ApiFeatures {

    constructor(mongooseQuery, queryString) {
        this.mongooseQuery = mongooseQuery;
        this.queryString = queryString
    }

    filter() {
        const queryObject = { ...this.queryString }
        const excludedFields = ['page', 'limit', 'sort', 'fields']
        excludedFields.forEach((filed) => delete queryObject[filed])
        let queryStr = JSON.stringify(queryObject)
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`)
        this.mongooseQuery.find(JSON.parse(queryStr))
        return this
    }
    sort() {
        if (this.queryString.sort) {
            const sortBy = this.queryString.sort.split(',').join(' ')
            this.mongooseQuery.sort(sortBy)
            return this
        }
        this.mongooseQuery.sort('-createdAt')
        return this
    }

    paginate(documentsNumber) {
        const page = parseInt(this.queryString.page) || 1
        const limit = parseInt(this.queryString.limit) || 10
        const skip = (page - 1) * limit
        const lastIndex = page * limit
        const pagination = {}
        pagination.lastPage = Math.ceil(documentsNumber / limit);
        pagination.page = page;
        pagination.limit = limit;
        pagination.numberOfPages = Math.ceil(documentsNumber / limit);
        if (lastIndex < documentsNumber) {
            pagination.next = page + 1;
        }
        if (skip > 0) {
            pagination.previous = page - 1;
        }
        this.paginationResult = pagination;
        this.mongooseQuery = this.mongooseQuery.skip(skip).limit(limit);
        return this;
    }

}
module.exports = ApiFeatures