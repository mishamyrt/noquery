const StaticServer = require('static-server')
const puppeteer = require('puppeteer')

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

/**
 * @param {string} path HTML file path
 * @returns {Page} Puppeteer page instance
 */
const getPage = async (path) => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(
    `http://127.0.0.1:1337/test/${path}`,
    { waitUntil: 'domcontentloaded' }
  )
  return page
}

module.exports = {
  startServer,
  getPage
}
