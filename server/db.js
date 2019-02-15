const mongoose = require('mongoose')
const consola = require('consola')
const { serverConfig, dbConfig } = require('../config/config')

const url = `mongodb://localhost/${dbConfig.db_name}`

var options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
}

// connect to mongo DB
mongoose.connect(url, options, () => consola.success('Mongo is connected') )

// get mongoose to use the global promise library
mongoose.Promise = global.Promise

if (serverConfig.app === 'development')
  mongoose.set('debug', true)

var db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

module.exports = db