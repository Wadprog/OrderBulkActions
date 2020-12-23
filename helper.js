/***
 *
 * Any functionality too small to be their own modules
 */

const helper = {}

//Constants
helper.constants = Object.freeze({ BASE_URL: '' })

// Helper functions
helper.allActionsMatch = () => {
  let allActionKeys = Object.keys(actions)
  if (
    allActionKeys &&
    Array.isArray(allActionKeys) &&
    allActionKeys.length > 0
  ) {
    for (let key of allActionKeys) {
    }
  }
}
module.exports = helper
