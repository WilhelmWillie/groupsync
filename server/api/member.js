module.exports = (router) => {
  router.get('/member', (req, res) => {
    res.json({
      message: 'Member Index'
    })
  })
}
