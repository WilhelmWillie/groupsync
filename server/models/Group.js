const mongoose = require('mongoose')

const Member = require('./Member')

const GroupSchema = new mongoose.Schema({
  name: String,
  goal: String,
  voteTime: Date,
  decideTime: Date,
  members: [
    [Member]
  ]
})

module.exports = mongoose.model('Group', GroupSchema)
