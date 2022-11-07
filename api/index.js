const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(__dirname + '/../data/db.json',)
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use('/api', router)

module.exports = server;