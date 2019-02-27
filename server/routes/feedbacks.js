var router = require('express').Router()
const consola = require('consola')
const createError = require('http-errors')
const request = require('request-promise')
const { captchaConfig } = require('../../config/config')
// const {Feedback, FeedbackSchema} = require('../models/feedback')

// GET feedbacks
router.get('/', function(req, res, next){
  res.send('GET feedbacks')
})

// GET feedback by ID
router.get('/:id', function(req, res, next){
  res.send('GET feedback by ID')
})

// POST new feedback
router.post('/', function(req, res, next) {
  console.log(req.body)
  res.send('POST new feedback')
})

// DELETE user by ID
router.delete('/:id', function(req, res, next){
  res.send('DELETE user by ID')
})

module.exports = router