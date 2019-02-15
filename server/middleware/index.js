const errorHandler = require('./errorHandler')
const errorLogger = require('./errorLogger')

const middlewares = {
  errorHandler,
  errorLogger
}

module.exports = middlewares