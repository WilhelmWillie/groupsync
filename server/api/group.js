const express = require('express')
const router = express.Router()

const Group = require('../models/Group')

router.get('/', (req, res) => {
  res.json({
    message: 'Group Index'
  })
})

router.post('/create', (req, res) => {
  const creator = new Member({
    name: req.body.creatorName,
    phoneNumber: req.body.creatorPhoneNumber
  })

  const group = new Group({
    name: req.body.name,
    goal: req.body.goal,
    members: [creator]
  });

  group.save(function (err) {
    if (err) return handleError(err);
    // Saved!

    res.json({
      message: 'Success!'
    })
  })
})

module.exports = router
