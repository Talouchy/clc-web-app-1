var router = require('express').Router()
const createError = require('http-errors')

// POST to log in the Admin and add him to the `req.session.authUser`
router.post('/login', (req, res, next) => {
  if (req.body.username === 'demo' && req.body.password === 'demo') {
    req.session.authUser = { username: 'demo' }
    return res.json({ username: 'demo' })
  }
  next(createError(403 ,'Unauthorized Credentials'))
})

// POST to log out the Admin and remove it from the `req.session`
router.post('/logout', function (req, res) {
  delete req.session.authUser
  res.json({ ok: true })
})

module.exports = router
