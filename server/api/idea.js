const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.json({
    message: 'Idea Index'
  })
})

module.exports = router
