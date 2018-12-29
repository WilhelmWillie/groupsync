const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.json({
    message: 'Hello World!!'
  })
})

require('./group')(router)
require('./idea')(router)
require('./member')(router)

module.exports = router
