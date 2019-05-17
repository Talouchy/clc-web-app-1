const errorLogger = (err, req, res, next) => {
  console.log(err)

  consola.error(JSON.stringify(err))
  next(err)
}

module.exports = errorLogger
