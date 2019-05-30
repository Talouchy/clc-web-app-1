const app = (process.env.NODE_ENV === 'production')?'production':'development'
// const host = process.env.HOST || '10.216.3.122'
const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 3000

const db_name = process.env.DB_NAME || 'clc-app'
const db_host = process.env.DB_HOST || 'ds247759.mlab.com'
const db_port = process.env.DB_PORT || '47759'
const db_username = process.env.DB_USERNAME || 'db_admin'
const db_password = process.env.DB_PASSWORD || 'db_admin123'

// const captcha_secret = process.env.CAPTCHA_SEECRET || '1dViDcOC0G4nCiJjXaefcMf'
const captcha_secret = process.env.CAPTCHA_SEECRET || '6LeJ-ZEUAAAAAC-9d1dViDcOC0G4nCiJjXaefcMf'

const serverConfig = {
  host: host, 
  port: port,
  app: app
}

const dbConfig = {
  db_name: db_name, 
  db_host: db_host,
  db_username: db_username,
  db_password: db_password,
  db_port: db_port
}

const captchaConfig = {
  captcha_secret: captcha_secret
}

module.exports = {serverConfig, dbConfig, captchaConfig}