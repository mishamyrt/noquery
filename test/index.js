import { startServer, getPage } from './utils.js'
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'

import {
  before,
  describe,
  it
} from 'mocha'

const { expect } = chai.use(chaiAsPromised)

describe('noQuery', () => {
  let page

  before(async () => {
    await startServer()
    page = await getPage()
  })

  it('should add function to global scope', async () => {
    const result = await page.evaluate(() => typeof window.$)
    return expect(result).to.equals('function')
  })

  it('should return HTMLElement if the only is found', async () => {
    const result = await page.evaluate(() =>
      window.$('.single') instanceof window.HTMLElement)
    return expect(result).to.be.true
  })

  it('should return array if multiple nodes found', async () => {
    const result = await page.evaluate(() =>
      Array.isArray(window.$('.multiple')))
    return expect(result).to.be.true
  })

  it('should search node in context', async () => {
    const result = await page.evaluate(() => {
      const node = window.$(
        '.child',
        window.$('.parent')
      )
      return node.classList.contains('not')
    })
    return expect(result).to.be.false
  })

  it('should return undefined if node not found', async () => {
    const result = await page.evaluate(() => window.$('null'))
    return expect(result).to.be.undefined
  })
})
