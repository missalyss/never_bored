'use strict'

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var cookieSession = require('cookie-session')
var methodOverride = require('method-override')

// Register partial setup

var index = require('./routes/index')
var users = require('./routes/users')
var activities = require('./routes/activities')
var categories = require('./routes/categories')
var search = require('./routes/search')
var favorites = require('./routes/favorites')
var sessions = require('./routes/auth/sessions')

var app = express()

var hbs = require('hbs')
// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

hbs.registerPartials(__dirname + '/views/partials')

// uncomment after placing your favicon in /public

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.enable('trust proxy')

app.use(logger('dev'))
app.use(methodOverride('_method'))
app.use(bodyParser.json())

app.use(cookieSession({
  name: 'never_bored',
  secret: process.env.SESSION_SECRET,
  secure: app.get('env') === 'production'
}))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use((req, res, next) => {
  if (req.session) res.locals.user = req.session
  next()
})
app.use('/', index)
app.use('/users', users)
app.use('/activities', activities)
app.use('/categories', categories)
app.use('/search', search)
app.use('/favorites', favorites)
app.use('/sessions', sessions)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
