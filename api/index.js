const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(__dirname + '/../data/db.json')
const middlewares = jsonServer.defaults({
    readOnly: true
})

server.use(middlewares)
server.route('/api').get((req, res) => {
    res.send({
        booksApi: '/api/books'
    })
})

server.route('/').get((req, res) => {
    res.send({
        api: '/api',
        booksApi: '/api/books'
    })
})

module.exports = server;