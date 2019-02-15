const errorLogger = function (err, req, res, next) {
  consola.error(JSON.stringify(err))
  next(err)
}

module.exports = errorLogger
