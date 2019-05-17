var router = require('express').Router()
const consola = require('consola')
const createError = require('http-errors')
const {Unit, UnitSchema} = require('../models/unit')

// GET units
router.get('/', function(req, res, next){
  Unit.find({})
  .then((units) => {
    return res.json(units)
  })
  .catch(next)
})

module.exports = router
