
const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const bodyParser = require('body-parser')
const middlewares = require('./middleware/')
const db = require('./db')
const apiRoutes = require('./routes/')
const app = express()
const {serverConfig} = require('../config/config.js')

app.set('port', serverConfig.port)

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// Parse application/json
app.use(bodyParser.json())

// Import API Routes
app.use('/api', apiRoutes)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  //  Log errors to console
  app.use(middlewares.errorLogger)

  // Error handler
  app.use(middlewares.errorHandler)

  // Listen the server
  app.listen(serverConfig.port, serverConfig.host)
  consola.ready({
    message: `Server listening on http://${serverConfig.host}:${serverConfig.port}`,
    badge: true
  })
}
start()
