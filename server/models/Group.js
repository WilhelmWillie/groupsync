const mongoose = require('mongoose')

const GroupSchema = new mongoose.Schema({
  name: String,
  goal: String
})

module.exports = mongoose.model('Group', GroupSchema)
