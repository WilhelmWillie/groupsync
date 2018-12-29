const mongoose = require('mongoose')

const GroupSchema = new mongoose.Schema({
  name: String,
  goal: String,
  voteTime: Date,
  decideTime: Date,
  groups: [
    [String]
  ]
})

module.exports = mongoose.model('Group', GroupSchema)
