const mongoose = require('mongoose')
const { serverConfig, dbConfig } = require('../config/config')


const url = `mongodb://${dbConfig.db_username}:${dbConfig.db_password}@${dbConfig.db_host}:${dbConfig.db_port}/${dbConfig.db_name}`

mongoose.Promise = global.Promise;

// connect to mongo DB
mongoose.connect(url, { useNewUrlParser: true }, () => console.log('Mongo is connected') )

if (serverConfig.app === 'development')
  mongoose.set('debug', true)

module.exports = {
  connection: mongoose.connection,
}