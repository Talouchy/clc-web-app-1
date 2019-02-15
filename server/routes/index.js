var router = require('express').Router()

// Add USERS Routes
router.use('/users', require('./users'))

module.exports = router