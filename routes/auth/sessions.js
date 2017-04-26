var express = require('express')
var router = express.Router()
var knex = require('../../db/connection')

var authorize = function (req, res, next) {
  if (!req.session.userId) {
    return next({
      status: 401,
      message: 'Unauthorized'
    })
  }
  next()
}

// Log out
router.delete('/', (req, res, next) => {
  req.session = null
  res.redirect('/')
})

router.get('/my-posted-activities', authorize, (req, res, next) => {
  var userId = req.session.userId
  knex('activities').where(userId, 'creator_id').then((postedActivities) => {

    res.render('myActivities', {postedActivities})
  })
})

router.get('/', authorize, (req, res, next) => {
  var userId = req.session.userId
  console.log(userId, req.session.userId)

  res.render('partials/authNav', {userId})
})


module.exports = router
