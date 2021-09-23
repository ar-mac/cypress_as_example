// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const def = require('nanoid')

const nanoid = def.customAlphabet('1234567890abcdef', 10)
const nanoidToken = def.customAlphabet('1234567890abcdef', 5)

server.use(middlewares)

server.use(jsonServer.bodyParser)
server.post('/items', (req, res, next) => {
  const data = req.body
  const id = nanoid()
  req.body.tokenPath = `/paths/${id}`

  router.db.read()
  router.db
    .get('paths')
    .insert({
      id,
      urlWithToken: data.url + `?myToken=${nanoidToken()}`,
    })
    .value()
  router.db.write()

  next()
})
server.use(router)
server.listen(3001, () => {
  console.log('JSON Server is running')
})
