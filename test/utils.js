// @ts-check
import StaticServer from 'static-server'
import puppeteer from 'puppeteer'
import { resolve as resolvePath } from 'path'

const LOCALHOST = '127.0.0.1'
const PORT = 1337
const PAGE_PATH = 'index.html'

/**
 * Starts static server on locahost
 * @returns {Promise<void>} Promise object represents the server is started
 */
export function startServer () {
  return new Promise(resolve =>
    new StaticServer({
      rootPath: resolvePath(),
      port: PORT,
      host: LOCALHOST
    }).start(resolve))
}

/**
 * Creates Puppeteer page with test content
 * @returns {Promise<import('puppeteer').Page>} Puppeteer page instance
 */
export async function getPage () {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(
    `http://${LOCALHOST}:${PORT}/test/${PAGE_PATH}`,
    { waitUntil: 'domcontentloaded' }
  )
  return page
}
