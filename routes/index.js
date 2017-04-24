var express = require('express')
var router = express.Router()
var knex = require('../db/connection')


/* GET home page. */
router.get('/', function(req, res, next) {
  knex('activities').then((allActivities) => {

    res.render('index', { allActivities })

  })
})

module.exports = router
