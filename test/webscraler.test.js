/**
 * Run tests to make sure everything works fine
 */

//Dependencies

const { assert } = require('chai')
const webScrawler = require('../webscraller')

webScrawler.init()
describe('Sanity Test', () => {
  it('true should be equal to true', async function () {
    assert.strictEqual(true, true)
  })
  describe('Browser Init', () => {
    it('Browser  should not be an object', async function () {
      await webScrawler.init()
      let { browser } = webScrawler
      assert.typeOf(browser, 'object')
    })
    it('Page should not be an object', function () {
      let { page } = webScrawler
      assert.typeOf(page, 'object')
    })
  })
})
