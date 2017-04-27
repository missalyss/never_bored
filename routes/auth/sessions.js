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

// Render only activities user has posted
router.get('/my-posted-activities/', authorize, (req, res, next) => {
  var userId = req.session.userId
  knex.select('activities.id', 'activities.title', 'activities.description', 'activities.img_url', 'activities.party', 'activities.location', 'activities.cost', 'activities.energy', 'activities.time', 'activities.adult', 'categories.name').where('activities.creator_id', userId)
  .from('activities')
  .innerJoin('tags_join', 'tags_join.activity_id', 'activities.id')
  .innerJoin('categories', 'tags_join.category_id', 'categories.id')
  .orderBy('activities.id', 'asc')
  .then((postedActivities) => {
    res.render('users/myActivities', {postedActivities})
  })
  .catch(err => {
    next(err)
  })
})

router.get('/', authorize, (req, res, next) => {
  var userId = req.session.userId
  console.log(req.session)

  knex('users').where('id', userId).then((thisUser) => {
    res.render('partials/authNav', {thisUser})
  })
})

module.exports = router
