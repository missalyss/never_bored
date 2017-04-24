var express = require('express')
var router = express.Router()
var knex = require('../db/connection')

/* GET home page. */
router.get('/', (req, res, next) => {
  knex('activities').then((allActivities) => {
    res.render('index', { allActivities })
  })
})

router.get('/login', (req, res, next) => {
  res.render('login')
})


router.get('/signup', (req, res, next) => {
  res.render('users/signup')
})


module.exports = router
