const {StatusCodes} = require('http-status-codes')

const customErrorHandler = (err, req, res, next) => {
   
    let customError = {
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || 'Something went wrong',
    }

    res.status(customError.statusCode).json({msg: customError.msg})
}

module.exports = customErrorHandler