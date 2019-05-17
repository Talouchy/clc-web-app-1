const createError = require('http-errors')

const errorHandler = function (err, req, res, next) {
  var error

  if (err.name === 'ValidationError') {
    if(err.errors.email)
      error = new createError(422, err.errors.email.message)
    else if(err.errors.userName)
      error = new createError(422, err.errors.userName.message)
    else
      error = new  createError(422, 'Validation Error')
  }
  else if(err.name === 'MongoNetworkError')
    error = new  createError(500, 'Server Error')
  else if (err.statusCode === 403)
    error = new createError(403, 'Unauthorized Credentials')
  else if (err.statusCode === 501)
    error = new createError(501, err.message)
  else error = new  createError(500, 'Server error')

  res.status(error.status).send({ok: false, msg: error.message})
}

module.exports = errorHandler
