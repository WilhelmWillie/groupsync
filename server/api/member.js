const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.json({
    message: 'Member Index'
  })
})

module.exports = router
