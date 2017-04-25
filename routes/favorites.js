'use strict'

var express = require('express')
var router = express.Router()
var knex = require('../db/connection')

var authorize = function (req, res, next) {
  if (!req.session.userId) {
    return next({
      status: 401,
      message: 'Unauthorized'
    })
  }
  next()
}

router.get('/', authorize, (req, res, next) => {

  var userId = req.session.userId
  console.log(userId, req.session.userId)
  res.render('login', { user: req.session })
    // res.send('hi')
  // knex('playlists')
  //   .innerJoin('tracks', 'tracks.id', 'playlists.track_id')
  //   .where('favorites_join.user_id', userId)
  //   .orderBy('tracks.title', 'ASC')
  //   .then((playlists) => {
  //     res.send(playlists)
  //   })
  //   .catch((err) => {
  //     next(err)
  //   })
})

module.exports = router
