var express = require('express')
var router = express.Router()
var knex = require('../db/connection')

/* GET home page. */
router.get('/', (req, res, next) => {
  knex('activities').then((allActivities) => {
    res.render('search', { allActivities })
  })
})

router.get('/data', (req, res, next) => {
  knex('activities').then((activityData) => {
    console.log(activityData)
    res.json(activityData)
  })
})

module.exports = router
