#!/usr/bin/env node

/**
 * Module dependencies.
 */

require('dotenv').config()
const app = require('../server')
const http = require('http')

/**
 * Get port from environment and store in Express.
 */

const PORT = normalizePort(process.env.NODE_DOCKER_PORT || '3000')
app.set('port', PORT)

/**
 * Create HTTP server.
 */

const server = http.createServer(app)

/**
 * Add Routes
 */

require('../src/routes/customer.routes')(server)

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(PORT)
server.on('error', onError)
server.on('listening', onListening)
/*
Server increments timeout
*/

// increase the timeout to 5 minutes
server.timeout = 300000

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort (val) {
  const port = parseInt(val, 10)

  if (isNaN(port)) {
    // named pipe
    return val
  }

  if (port >= 0) {
    // port number
    return port
  }

  return false
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError (error) {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = typeof PORT === 'string'
    ? 'Pipe ' + PORT
    : 'Port ' + PORT

  // handle specific listen errors with friendly messages
  switch (error.code) {
  case 'EACCES':
    console.error(bind + ' requires elevated privileges')
    process.exit(1)
  case 'EADDRINUSE':
    console.error(bind + ' is already in use')
    process.exit(1)
  default:
    throw error
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening () {
  const addr = server.address()
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port
  console.log(`Listening on ${PORT}` + bind)
}
