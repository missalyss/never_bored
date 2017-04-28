var express = require('express')
var router = express.Router()
var knex = require('../db/connection')
var bcrypt = require('bcrypt-as-promised')

var authorize = function (req, res, next) {
  if (!req.session.userId) {
    return next({
      status: 401,
      message: 'Unauthorized'
    })
  }
  next()
}

// Render users' delete page
router.get('/delete/:id', authorize, (req, res, next) => {
  knex('users').where('id', req.session.userId).first().then((thisUser) => {
    console.log(thisUser)
    delete thisUser.hashed_pw
    res.render('users/delete', {thisUser})
  })
})

// Render user settings page
router.get('/settings/:id', authorize, (req, res, next) => {
  console.log(req.session.userId);
  knex('users').where('id', req.session.userId).first().then((thisUser) => {
    delete thisUser.hashed_pw
    console.log(thisUser)
    res.render('users/settings', {thisUser})
  })
})

// Render user
router.get('/:id', authorize, (req, res, next) => {
  var id = req.params.id
  knex('users').where('id', id).then((thisUser) => {
    res.render('users/user', {thisUser})
  })
})

// Register user
router.post('/', (req, res, next) => {
  if (!req.body.username || !req.body.password || !req.body.email || !req.body.avatar_url) {
    return res.render('users/signup', {error: 'Fill in all fields. (And make sure an avatar is selected!)'})
  }
  if (req.body.password !== req.body['confirm-password']) {
    return res.render('users/signup', {error: 'Passwords do not match'})
  }

  knex('users').then((allUsers) => {
    for (element of allUsers) {
      if (element.username === req.body.username) {
        console.log('existing, Reject')
        return res.render('users/signup', {
          error: 'Username already exist.'
        })
      }

      if (element.email === req.body.email) {
        console.log('existing, Reject')
        return res.render('users/signup', {
          error: 'Email already exist.'
        })
      }
    }
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
      req.session.username = user.username
      res.redirect(`/`)
    }).catch((err) => {
      next(err)
    })
  })
})

// delete user
router.delete('/delete/:id', authorize, (req, res, next) => {
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
    throw { status: 400, message: 'Oops! Your username or password didn\'t work. Go back and try again!' }
  })
  .catch((err) => {
    next(err)
  })
})

// PUT user
router.put('/:id', authorize, (req, res, next) => {
  var id = req.params.id
  var editUser = {
    username: req.body.username,
    email: req.body.email
  }
  knex('users').where('id', id).update(editUser).then(() => {
    res.redirect(`/users/${id}`)
  })
})

// user login
router.post('/session', (req, res, next) => {
  var { username, password } = req.body
  var user
  knex('users').where('username', username).first()
  .then((row) => {
    if (!row) {
    throw { status: 400, message: 'Oops! Your username or password didn\'t work. Go back and try again!' }
    }
    user = row
    return bcrypt.compare(password, user.hashed_pw)
  })
  .then(() => {
    delete user.hashed_pw
    req.session.userId = user.id
    req.session.username = user.username
    res.redirect(`/`)
  })
  .catch(bcrypt.MISMATCH_ERROR, () => {
    throw { status: 400, message: 'Oops! Your username or password didn\'t work. Go back and try again!' }
  })
  .catch((err) => {
    next(err)
  })
})

module.exports = router
