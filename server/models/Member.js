const mongoose = require('mongoose')

const MemberSchema = new mongoose.Schema({
  name: String,
  phoneNumber: String,
  admin: Boolean
})

module.exports = mongoose.model('Member', MemberSchema)
