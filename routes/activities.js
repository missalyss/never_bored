var express = require('express')
var router = express.Router()
var knex = require('../db/connection')


//get to the new form
router.get('/new', (req, res, next) =>{
  res.render('activities/new')
})


router.get('/:id', (req, res, next)=>{
  var id = req.params.id
  // console.log(id);
  knex('activities')
  .select('activities.*', 'categories.name')
  .innerJoin('tags_join', 'tags_join.activity_id', 'activities.id')
  .innerJoin('categories', 'tags_join.category_id', 'categories.id' )
  .where('activities.id', id)
  .then(thisActivity =>{
    var reworkActivity = thisActivity[0]
    var categoryArray = thisActivity.map(function(element){
      return element.name
    })
    reworkActivity.categoryArray = categoryArray;

    res.render('activities/show', {thisActivity})
  }).catch(console.error)
})

// .select('*')


//get single id ***** IN CASE CODE BREAKS UNCOMMENT THIS
// router.get('/:id', (req, res, next) => {
//   var id = req.params.id
//   knex('activities').where('id', id).then((thisActivity) => {
//     console.log(thisActivity);
//
//     // look at pass inner join lessons and add
//     res.render('activities/show', {thisActivity})
//   })
// })

//get to the edits page
router.get('/:id/edits', (req, res, next) =>{
  const id = req.params.id
  knex('activities').select('*').where({id}).first().then((activity)=>{
    res.render('activities/edits', {activity})
  })
})


//post new activities into form
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

  var addCategory = {
    category_id: parseInt(req.body['select_categories'])
  }


knex('activities').insert(createActivity, '*').then(newActivity =>{
  var id = newActivity[0].id
  addCategory.activity_id = id
  knex('tags_join').insert(addCategory, '*').then(()=>{

    res.redirect(`activities/${id}`)
    })
  })
})

//put method --editing the activity form

router.put('/:id', (req, res, next) =>{
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
    creator_id: req.body['creator_id']
  }

  knex('activities')
  .update(editActivity, '*')
  .where('id', id)
  .then((edits) =>{

    res.redirect(`/activities/${id}`)
  })
})


router.delete('/:id', function (req, res, next){
  var id = req.params.id

  knex('activities').del().where({id}).then(()=>{
    res.redirect('/')
  })
})
module.exports = router
