const app = require('./app')
const { SERVER_HOST, SERVER_PORT } = require('../shared/config')

// Start Express server
app.listen(SERVER_PORT, () => {
  console.log(`🚀 App server running on ${SERVER_HOST}:${SERVER_PORT} ✌️`)
})
