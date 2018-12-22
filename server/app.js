const bodyParser = require('body-parser')
const express = require('express')

const app = express()

app.use(bodyParser.json({ strict: false }))
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.json({
    message: 'Hello world!'
  })
})

module.exports = app
