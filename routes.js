const routes = module.exports = require('next-routes')()

routes
.add('group', '/group/:id', 'group')
