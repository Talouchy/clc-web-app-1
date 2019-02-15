var router = require('express').Router()
const consola = require('consola')
const createError = require('http-errors')
const {User, UserSchema} = require('../models/user')

// GET users
router.get('/', function(req, res, next){
  User.find({})
  .then((user) => {
    res.send(user)
  })
  .catch(next)
})

// GET user by ID
router.get('/:id', function(req, res, next){
  User.findById( req.params.id )
  .then((user) => {
      if(!user) return next(createError(404, 'User not found'))
      res.send(user)
  })
  .catch(next)
})

// POST new user
router.post('/', function(req, res, next) {
  User.create(req.body)
  .then((user) => {
    if(!user) return createError(422 ,'Can not crete user')
    // TODO: remove user password
    res.send(user)
  })
  .catch(next)
})

// PUT update user by ID
router.put('/:id', function(req, res, next) {
  User.findOneAndUpdate({_id: req.params.id}, req.body, { runValidators: true })
  .then((user) => {
    if(!user) return next(createError(404, 'User not found'))
    User.findOne({_id: req.params.id})
    .then((user) => {
        if(!user) return next(createError(404, 'User not found'))
        res.send(user)
    })
  })
  .catch(next)
})

// DELETE user by ID
router.delete('/:id', function(req, res, next){
  User.deleteOne({_id: req.params.id})
  .then((user) => {
      if (user.ok === true, user.n == 0)
          throw createError(404, "No Such User")
      res.send(user);
  })
  .catch(next)
})

module.exports = router