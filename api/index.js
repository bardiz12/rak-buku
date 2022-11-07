const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(__dirname + '/../data/db.json')

const allowedMethods = ['GET', 'HEAD']

server.use((req, res, next) => {
    if (!allowedMethods.includes(req.method)) return res.status(405).send({
        message: 'method not allowed'
    })
    return next()
})

server.use('/api', router)

server.get('/', (req, res) => {
    res.send({
        booksApi: '/api/books'
    })
})

module.exports = server;