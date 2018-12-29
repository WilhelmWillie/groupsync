module.exports = (router) => {
  router.get('/idea', (req, res) => {
    res.json({
      message: 'Idea Index'
    })
  })
}
