// Import required packages
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const bluebird = require('bluebird')
const path = require('path')

const config = require('../shared/config')

// Set up Express app
const app = express()

// Set up database
mongoose.Promise = bluebird
if (process.env.NODE_ENV === 'production') {
  mongoose.connect(config.PROD.MONGO_URL)
} else {
  mongoose.connect(config.DEV.MONGO_URL)
}

// Set up body parser
app.use(bodyParser.json({ strict: false }))
app.use(bodyParser.urlencoded({ extended: false }))

// Enable routes
const router = require('./routes')
app.use('/api', router)

module.exports = app
