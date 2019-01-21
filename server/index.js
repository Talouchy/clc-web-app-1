
const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const serverConfig  = require('../config/config.js')

app.set('port', serverConfig.port)

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

  // Listen the server
  app.listen(serverConfig.port, serverConfig.host)
  consola.ready({
    message: `Server listening on http://${serverConfig.host}:${serverConfig.port}`,
    badge: true
  })
}
start()
