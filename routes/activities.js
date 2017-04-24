var express = require('express')
var router = express.Router()
var knex = require('../db/connection')


//get to the new form
router.get('/new', (req, res, next) =>{
  res.render('activities/new')
})


router.get('/:id', (req, res, next) => {
  var id = req.params.id
  knex('activities').where('id', id).then((thisActivity) => {
    res.render('activities/show', {thisActivity})
  })
})


router.post('/', (req, res, next)=>{
  var createActivity = {
    title: req.body.title,
    description: req.body.description,
    cost: req.body.cost,
    energy: req.body.energy,
    time: req.body.time,
    location: req.body.location,
    party: req.body.party,
    adult: req.body.adult,
    img_url: req.body['img_url'],
    creator_id: req.body['creator_id']
  }

knex('activities').insert(createActivity, '*').then(newActivity =>{
  var id = newActivity[0].id
  res.redirect(`activities/${id}`)
  })
})

module.exports = router
