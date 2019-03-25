var router = require('express').Router()
const createError = require('http-errors')
const request = require('request-promise')
var Crawler = require("crawler")
const {Unit, UnitSchema} = require('../models/unit')


// GET to scrap units from webpage
router.get('/units/:term', function (req, res, next) {

  const requestOptions = {
    method: 'POST',
    uri: 'https://handbook.cqu.edu.au/facet/timetables/search-timetable',
    form: {
      unitName: '',
      unitCode:'',
      term: req.param.term,
      location: 'MEL'
    },
    headers:{ 
      "Content-Type": "application/x-www-form-urlencoded"
    }
  }

  request(requestOptions)
    .then(response => {
      var c = new Crawler({
        maxConnections : 10,
        // This will be called for each crawled page
        callback : function (error, res, done) {
          if(error) return createError(501 ,'Reading DOM Failed')
          else {
            var $ = res.$
            var units = []

            $("div.col-xl-12.mb-3").each((index, element) => {
              // Extract unit code & name
              var unitNmaeAndCode = $(element)
                .find('div.mc-card-header')
                .find('div.col-md-12')
                .text()
                .replace(/(\r\n|\n|\r)/gm, "")
                .replace(/ +(?= )/g,'$')
                .trim()
                .split("$")

              // Extract unit type & term
              var unitTypeAndTerm = $(element)
                .find('div.mc-card-header')
                .find('div.col.text-cqu-light')
                .text()
                .replace(/(\r\n|\n|\r)/gm, "$")
                .replace(/ +(?= )/g,'')
                .split("$")

              var unitType = unitTypeAndTerm[1].trim().toLowerCase()

              // Extract unit details
              var unitDetails = $(element)
                .find('div.mc-card-body')
                .find('div.col-xl-3')
                .text()
                .replace(/(\r\n|\n|\r)/gm, "")
                .replace(/ +(?= )/g,'$')
                .split("$")

              var unitDate = unitDetails[7].trim().split('to')
              var unitStartDate = unitDate[0].trim()
              var unitEndDate = unitDate[1].trim()

              var unitDetail = {
                type: unitType.replace(' ', '_'),
                staff: unitDetails[1].trim().toLowerCase(),
                location: unitDetails[3].trim(),
                day: unitDetails[5].trim().toLowerCase(),
                time: unitDetails[6].trim(),
                startDate: unitStartDate,
                endDate: unitEndDate
              }

              var isCodeFound = false

              units.forEach((unit, i) => {
                if(unit.code === unitNmaeAndCode[1].trim().toLowerCase()) {
                  units[i].classes.push(unitDetail)
                  isCodeFound = true
                  return false;
                }
              })

              if(isCodeFound === false) {
                var newUnit = {
                  code: unitNmaeAndCode[1].trim().toLowerCase(),
                  name: unitNmaeAndCode[2].trim().toLowerCase(),
                  classes:[]
                }

                newUnit.classes.push(unitDetail)

                // Add New unit
                units.push(newUnit)
              }
            })

            if(units.length > 0)
            {
              Unit.deleteMany({}, (err) => {
                if (err) return createError(501 ,'1- Scrap DB error')

                Unit.insertMany(units, (err) => {
                  if (err) return createError(501 ,'2- Scrap DB error')
                })
              })
            }
          }
        }
      })

      c.queue([{
        html: response
      }])
      res.json({ ok: true })
    })
    .catch(next)
})

module.exports = router
