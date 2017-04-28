var express = require('express')
var router = express.Router()
var knex = require('../db/connection')

var authorize = function (req, res, next) {

  if (!req.session.userId) {
    return next({
      status: 401,
      message: 'Oops! Sorry friend, but you need to be signed in to view this page. Please log in or create an account.'
    })
  }
  next()
}

// Render New activity
router.get('/new', authorize, (req, res, next) => {
  res.render('activities/new')
})

// Render image uploading
router.get('/images', (req, res, next) => {
  res.render('activities/blueimp')
})

router.post('/images', (req, res, next) => {
  var image = req.body
  console.log(image)
  res.send(req.body)
})

// Show activity
router.get('/:id', (req, res, next) => {
  var id = req.params.id
  return knex.select('activities.title', 'activities.id', 'activities.description', 'activities.cost', 'activities.energy', 'activities.time', 'activities.location', 'activities.party', 'activities.adult', 'activities.creator_id', 'activities.img_url', 'categories.name')
  .from('activities')
  .innerJoin('tags_join', 'tags_join.activity_id', 'activities.id')
  .innerJoin('categories', 'tags_join.category_id', 'categories.id')
  .where('activities.id', id)
  .then(thisActivity => {
    console.log(thisActivity)
    var activityIndividual = thisActivity[0]
    // look at pass inner join lessons and add
    res.render('activities/show', {thisActivity, activityIndividual})
  })
})

// Render edit activity
router.get('/edits/:id', authorize, (req, res, next) => {
  const id = req.params.id
  knex('activities').select('*').where({id}).first().then((activity) => {
    res.render('activities/edits', {activity})
  })
})

// Post activity
router.post('/', authorize, (req, res, next) => {
  if(!req.body.title){
    return res.render('activities/new', {error: 'need added title'})
  }
  if(!req.body.description){
    return res.render('activities/new', {error: 'need added description'})
  }

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
    creator_id: req.session.userId
  }

  var addCategory = {
    category_id: parseInt(req.body['select_categories'])
  }

  knex('activities').insert(createActivity, '*').then(newActivity => {
    var id = newActivity[0].id
    addCategory.activity_id = id
    knex('tags_join').insert(addCategory, '*').then(() => {
      res.redirect(`activities/${id}`)
    })
  })
})

// Put activity
router.put('/:id', authorize, (req, res, next) => {
  const id = req.params.id

  var editActivity = {
    title: req.body.title,
    description: req.body.description,
    cost: req.body.cost,
    energy: req.body.energy,
    time: req.body.time,
    location: req.body.location,
    party: req.body.party,
    adult: req.body.adult,
    img_url: req.body['img_url'],
    creator_id: req.session.userId
  }

  var editCategories = {
    category_id: parseInt(req.body['select_categories'])
  }

  knex('activities')
  .update(editActivity, '*')
  .where('id', id)
  .then((edits) => {
    knex('tags_join')
    .where('activity_id', id)
    .update(editCategories, '*')
    .then(() => {
      res.redirect(`/sessions/my-posted-activities/`)
    })
  })
})

// Delete activity
router.delete('/:id', authorize, (req, res, next) => {
  var id = req.params.id
  knex('activities').del().where({id})
  .then(() => {
    res.redirect('/')
  })
})
module.exports = router
