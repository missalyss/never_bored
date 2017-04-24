var express = require('express')
var router = express.Router()
var knex = require('../db/connection')
var bcrypt = require('bcrypt-as-promised')

/* GET users listing. */

router.get('/:id/delete', (req, res, next) => {
  res.render('users/delete')
})

router.get('/:id', (req, res, next) => {
  var id = req.params.id
  knex('users').where('id', id).then((thisUser) => {
    res.render('users/user', {thisUser})
  })
})

router.post('/', (req, res, next) => {
  bcrypt.hash(req.body.password, 12)
  .then((hashed_pw) => {
    var newUser = {
      username: req.body.username,
      email: req.body.email,
      hashed_pw: hashed_pw,
      avatar_url: 'http://fillmurray.com/80/80'
    }
    console.log(newUser)
    return knex('users').insert(newUser, '*')
  })
  .then((users) => {
    var user = users[0]
    console.log(user)
    delete user.hashed_pw
    res.redirect(`/users/${user.id}`)
  }).catch((err) => {
    next(err)
  })
})

router.delete('/:id', (req, res, next) => {
  var id = req.params.id
  knex('users').del().where('id', id).then(() =>{
    res.resdirect('/')
  })
})

module.exports = router
