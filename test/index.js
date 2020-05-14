'use strict'

const {
  before,
  describe,
  it
} = require('mocha')

const { startServer } = require('./utils.js')
const puppeteer = require('puppeteer')
const { expect } = require('chai').use(require('chai-as-promised'))

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
    const result = await page.evaluate(() => {
      return typeof window.$
    })
    expect(result).to.equals('function')
  })

  it('should return HTMLElement if the only is found', async () => {
    const result = await page.evaluate(() => {
      return window.$('.single') instanceof window.HTMLElement
    })
    expect(result).to.equal(true)
  })

  it('should return array if multiple nodes found', async () => {
    const result = await page.evaluate(() => {
      return Array.isArray(window.$('.multiple'))
    })
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
    const result = await page.evaluate(() => {
      return window.$('null')
    })
    expect(result).to.equal(undefined)
  })
})
