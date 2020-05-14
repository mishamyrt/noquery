const StaticServer = require('static-server')

/**
 * @param {number} port Port where the server will be started
 * @returns {number} Promise object represents the server is started
 */
const startServer = port =>
  new Promise(resolve =>
    new StaticServer({
      rootPath: `${__dirname}/..`,
      port: port,
      host: '127.0.0.1'
    }).start(resolve))

module.exports = {
  startServer
}
