var router = require('express').Router()

// USERS Routes
router.use('/users', require('./users'))

// FEEDBACKS Routes
router.use('/feedbacks', require('./feedbacks'))

// RECAPTCHA Routes
router.use('/recaptcha', require('./recaptcha'))

module.exports = router