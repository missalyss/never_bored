
const env = process.env.NOVE_ENV || 'development'
const knexConfig = require('../knexfile')[env]
const knex = require('knex')(knexConfig)
