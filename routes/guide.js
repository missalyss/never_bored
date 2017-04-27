var express = require('express')
var router = express.Router()
var knex = require('../db/connection')

/* GET home page. */

router.get('/', (req, res, next) => {
  return knex.select('activities.title', 'activities.id', 'activities.cost', 'activities.energy', 'activities.time', 'activities.location', 'activities.party', 'activities.adult', 'activities.creator_id', 'activities.img_url', 'categories.name')
  .from('activities')
  .innerJoin('tags_join', 'tags_join.activity_id', 'activities.id')
  .innerJoin('categories', 'tags_join.category_id', 'categories.id')
  .orderBy('activities.id', 'asc')
  .then(allActivities => {
    //
    res.render('guide', { allActivities })
  }).catch(err => {
    next(err)
  })
})

router.get('/data', (req, res, next) => {
  console.log(req.query)
  var queryData = {
    location: req.query.location,
    cost: req.query.cost
  }
  knex.select('activities.title', 'activities.id', 'activities.cost', 'activities.energy', 'activities.time', 'activities.location', 'activities.party', 'activities.adult', 'activities.creator_id', 'activities.img_url', 'categories.name')
  .from('activities')
  .innerJoin('tags_join', 'tags_join.activity_id', 'activities.id')
  .innerJoin('categories', 'tags_join.category_id', 'categories.id')
  .where(queryData)
  .then(guideActivity => {
    var arrayLength = guideActivity.length
    //
    if (guideActivity.length > 1) {
      var randomActivity = guideActivity[Math.floor(Math.random() * arrayLength)]
      console.log()
    }
    res.redirect(`/activities/${randomActivity.id}`)
  })
})

module.exports = router
