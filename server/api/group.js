module.exports = (router) => {
  router.get('/group', (req, res) => {
    res.json({
      message: 'Group Index'
    })
  })
}
