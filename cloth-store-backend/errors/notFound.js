const CustomError = require('./customError')
const {StatusCodes} = require('http-status-codes')

class NotFoundError extends CustomError {
    constructor(message) {
        super(message)
        this.statusCode = StatusCodes.NotFoundError
    }
}


module.exports = NotFoundError