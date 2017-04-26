var express = require('express')
var router = express.Router()
var knex = require('../db/connection')
var bcrypt = require('bcrypt-as-promised')

// Render users' delete page
router.get('/delete/:id', (req, res, next) => {
  knex('users').where('id', req.params.id).first().then((thisUser) => {
    console.log(thisUser)
    res.render('users/delete', {thisUser})
  })
})

// Render user
router.get('/:id', (req, res, next) => {
  var id = req.params.id
  knex('users').where('id', id).then((thisUser) => {
    res.render('users/user', {thisUser})
  })
})

// Register user
router.post('/', (req, res, next) => {
  bcrypt.hash(req.body.password, 12)
  .then((hashed_pw) => {
    var newUser = {
      username: req.body.username,
      email: req.body.email,
      hashed_pw: hashed_pw,
      avatar_url: req.body.avatar_url
    }
    console.log(newUser)
    return knex('users').insert(newUser, '*')
  })
  .then((users) => {
    var user = users[0]
    delete user.hashed_pw
    req.session.userId = user.id
    res.redirect(`/`)
  }).catch((err) => {
    next(err)
  })
})

// delete user
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
    knex('users').where('id', id).del().then(() => {
      req.session = null
      res.redirect('/')
    })
  }).catch(bcrypt.MISMATCH_ERROR, () => {
    throw { status: 400, message: 'Bad username or password' }
  })
  .catch((err) => {
    next(err)
  })
})

// user login
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
    req.session.userId = user.id
    console.log(user, req.session)
    res.redirect(`/`)
  })
  .catch(bcrypt.MISMATCH_ERROR, () => {
    throw { status: 400, message: 'Bad username or password' }
  })
  .catch((err) => {
    next(err)
  })
})

module.exports = router
