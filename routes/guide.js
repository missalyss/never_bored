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

module.exports = router
