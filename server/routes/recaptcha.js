var router = require('express').Router()
const consola = require('consola')
const createError = require('http-errors')
const request = require('request-promise')
const { captchaConfig } = require('../../config/config')


// POST Verify google recaptcha
router.post('/verify', function(req, res, next){
  
  if(req.body.recaptchaToken === undefined || !req.body.recaptchaToken)
    return createError(422 ,'ReCaptcha token missing')

  const verifyCaptchaOptions = {
    method: 'POST',
    uri: 'https://www.google.com/recaptcha/api/siteverify',
    form: {
      secret: captchaConfig.captcha_secret,
      response: req.body.recaptchaToken
    }
  }

  request(verifyCaptchaOptions)
    .then(response => {
      response = JSON.parse(response)

      if(response.success === false || response === undefined)
        next(createError(422 ,'ReCaptcha verification failed'))
      else
        res.status(200).send('ReCaptcha verified :D')
    })
    .catch(next)
})

module.exports = router