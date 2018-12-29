const mongoose = require('mongoose')

const IdeaSchema = new mongoose.Schema({
  title: String,
  description: String,
  reacts: {
    likeCount: Number,
    loveCount: Number,
    dislikeCount: Number
  }
})

module.exports = mongoose.model('Idea', IdeaSchema)
