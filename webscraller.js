/**
 *
 * All the logic of going on a page and do action on that page.
 */

// Dependencies

// Custom dependencies
const helper = require('./helper')
let { allActionsMatch } = helper

// The main Object and the one to return from this module.
const scrawler = {
  browser: null,
  page: null,
}

scrawler.init = () => {}
scrawler.login = () => {
  console.log('Sanity checking')
}
scrawler.goToPage = async (link) => {
  if (!scrawler.loggedIn) {
    await scrawler.login()
  }
  if (
    typeof link === 'string' &&
    link.trim().length > 0 &&
    link.includes('http')
  )
    await scrawler.page.goto(link)
  else throw new TypeError('The Link must be a string')
}
scrawler.getOrderDetails = () => {}
//part, match
scrawler.actionOnPage = async (link, actions) => {
  const takeAction = async (link, actions) => {
    await scrawler.goToPage(link)
    // Creating an order object containing  all details on the order
    let orderDetails = await scrawler.getOrderDetails()

    if (allActionsMatch(orderDetails, action)) {
      //take actions
      let handleFunction =
        typeof scrawler[action.main_action] == 'function'
          ? scrawler[action.main_action]
          : false

      if (handleFunction) await handleFunction()
      else
        throw new Error(
          `There is no defined function for ${action.main_action} `
        )
    }
  }
  if (Array.isArray(link) && links.length > 0) {
    for (let orderLink of link) {
      await takeAction(orderLink, actions)
    }
  } else if (
    typeof link === 'string' &&
    link.trim().length > 0 &&
    link.includes('https')
  ) {
    await takeAction(link, actions)
  } else {
    throw TypeError('link must either an array of string or a string')
  }
}

async function test() {
    
}
module.exports = scrawler
