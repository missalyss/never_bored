var express = require('express')
var router = express.Router()
var knex = require('../db/connection')

router.get('/:id', (req, res, next) => {
  var id = req.params.id
  knex('activities').where('id', id).then((thisActivity) => {
    res.render('activities/show', {thisActivity})
  })
})

module.exports = router
