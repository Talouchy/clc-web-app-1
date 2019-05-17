var router = require('express').Router()

// AUTHENTICATION Routes
router.use('/auth', require('./authentication'))

// USERS Routes
router.use('/users', require('./users'))

// FEEDBACKS Routes
router.use('/feedbacks', require('./feedbacks'))

// RECAPTCHA Routes
router.use('/recaptcha', require('./recaptcha'))

// UNIT Routes
router.use('/units', require('./units'))

// Scraping Routes
router.use('/scrap', require('./scrap'))

module.exports = router