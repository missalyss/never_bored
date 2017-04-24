var express = require('express')
var router = express.Router()
var knex = require('../db/connection')
var bcrypt = require('bcrypt-as-promised')

/* GET users listing. */
router.get('/', (req, res, next) => {
  knex('users').then((allUsers) => {
    res.render('users/user', {allUsers})
  })
})

router.post('/users', (req, res, next) => {
  bcrypt.has(req.body.password, 12)
  .then((hashed_pw) => {
    var newUser = {
      username: req.body.username,
      email: req.body.email,
      hashed_pw: hashed_pw,
      avatar_url: req.body.avatar_url
    }
    return knex('users').insert(newUser, '*')
  })
  .then((users) => {
    var user = users[0]
    delete user.hashed_password
    res.json(user)
  }).catch((err) => {
    next(err)
  })
})

module.exports = router
