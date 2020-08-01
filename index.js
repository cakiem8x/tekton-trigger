const http = require('http')
const logger = require('./logger')

const handlerRequest = (req, res) => {
  logger.info('request: ', req.headers['user-agent'])
  res.writeHead(200)
  res.end('Hello world!')
}

const server = http.createServer(handlerRequest)
const port = process.env.PORT || 3000

server.listen(port, err => {
  if (err) {
    return logger.error(err)
  }
  logger.info(`Server listening on port ${port}`)
})
