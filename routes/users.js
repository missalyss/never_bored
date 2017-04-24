var express = require('express')
var router = express.Router()
var knex = require('../db/connection')

/* GET users listing. */
router.get('/', function(req, res, next) {
  knex('users').then((allUsers) => {
    res.render('users/user', {allUsers})
  })
})

module.exports = router
