var express = require('express')
var router = express.Router()
var knex = require('../db/connection')
var bcrypt = require('bcrypt-as-promised')

/* GET users listing. */
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
    delete user.hashed_pw
    res.redirect('/user')
  }).catch((err) => {
    next(err)
  })
})

module.exports = router
