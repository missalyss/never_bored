var express = require('express')
var router = express.Router()
var knex = require('../db/connection')

/* GET home page. */
router.get('/', (req, res, next) => {
  knex('activities').then((allActivities) => {
    res.render('search', { allActivities })
  })
})

module.exports = router
