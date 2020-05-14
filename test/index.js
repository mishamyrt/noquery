const puppeteer = require('puppeteer')
const { startServer } = require('./utils.js')
const { expect } = require('chai').use(require('chai-as-promised'))
const {
  before,
  describe,
  it
} = require('mocha')

describe('noQuery', () => {
  let page

  before(async () => {
    await startServer(1337)
    const browser = await puppeteer.launch()
    page = await browser.newPage()
    await page.goto(
      'http://127.0.0.1:1337/test/index.html',
      { waitUntil: 'domcontentloaded' }
    )
  })

  it('should add function to global scope', async () => {
    const result = await page.evaluate(() => typeof window.$)
    expect(result).to.equals('function')
  })

  it('should return HTMLElement if the only is found', async () => {
    const result = await page.evaluate(() =>
      window.$('.single') instanceof window.HTMLElement)
    expect(result).to.equal(true)
  })

  it('should return array if multiple nodes found', async () => {
    const result = await page.evaluate(() =>
      Array.isArray(window.$('.multiple')))
    expect(result).to.equal(true)
  })

  it('should search node in context', async () => {
    const result = await page.evaluate(() => {
      const node = window.$(
        '.child',
        window.$('.parent')
      )
      return node.classList.contains('not')
    })
    expect(result).to.equal(false)
  })

  it('should return undefined if node not found', async () => {
    const result = await page.evaluate(() => window.$('null'))
    expect(result).to.equal(undefined)
  })
})
