var express = require('express')
var router = express.Router()
var knex = require('../db/connection')
var bcrypt = require('bcrypt-as-promised')

/* GET users listing. */

router.get('/delete/:id', (req, res, next) => {
  knex('users').where('id', req.params.id).then((thisUser) => {

  })
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

router.delete('/delete/:id', (req, res, next) => {
  var id = req.params.id
  var password = req.body.password
  console.log(password, id)
  var user
  knex('users').where('id', id).first()
  .then((row) => {
    user = row
    console.log(user)
    bcrypt.compare(password, user.hashed_pw)
    knex('users').where('user', user).del().then(() => {
      res.resdirect('/')
    })
  }).catch(bcrypt.MISMATCH_ERROR, () => {
    throw { status: 400, message: 'Bad username or password' }
  })
  .catch((err) => {
    next(err)
  })
})

router.post('/session', (req, res, next) => {
  var { username, password } = req.body
  var user
  knex('users').where('username', username).first()
  .then((row) => {
    if (!row) {
      throw { status: 400, message: 'Bad username or password' }
    }
    user = row
    return bcrypt.compare(password, user.hashed_pw)
  })
  .then(() => {
    delete user.hashed_pw
    console.log(user)
    res.redirect(`/users/${user.id}`)
  })
  .catch(bcrypt.MISMATCH_ERROR, () => {
    throw { status: 400, message: 'Bad username or password' }
  })
  .catch((err) => {
    next(err)
  })
})

module.exports = router
