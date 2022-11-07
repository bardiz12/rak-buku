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

router.render = function (req, res) {
    if (Object.keys(res.locals.data).length === 0) {
        return res.jsonp({
            status: 'error',
            message: "not found",
            data: null
        })
    }

    return res.jsonp({
        status: 'success',
        message: 'OK',
        data: res.locals.data
    })

}

server.use('/api', router)

server.get('/', (req, res) => {
    res.send({
        booksApi: '/api/books'
    })
})

server.use(function (req, res, next) {
    res.status(404).send({
        "message": "Not found"
    })
});

module.exports = server;