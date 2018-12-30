const group = require('./group')
const idea = require('./idea')
const member = require('./member')

const API_PREFIX = '/api'

module.exports = (server) => {
  server.get(`${API_PREFIX}/`, (req, res) => {
    res.json({
      message: 'Hello World!!'
    })
  })

  server.use(`${API_PREFIX}/group`, group)
  server.use(`${API_PREFIX}/idea`, idea)
  server.use(`${API_PREFIX}/member`, member)
}
