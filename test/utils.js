import StaticServer from 'static-server'
import puppeteer from 'puppeteer'
import { resolve as resolvePath } from 'path'

/**
 * @param {number} port Port where the server will be started
 * @returns {number} Promise object represents the server is started
 */
export const startServer = port =>
  new Promise(resolve =>
    new StaticServer({
      rootPath: resolvePath(),
      port: port,
      host: '127.0.0.1'
    }).start(resolve))

/**
 * @param {string} path HTML file path
 * @returns {Page} Puppeteer page instance
 */
export const getPage = async (path) => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(
    `http://127.0.0.1:1337/test/${path}`,
    { waitUntil: 'domcontentloaded' }
  )
  return page
}
