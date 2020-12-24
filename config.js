/**
 * Has the details on how the app will run
 */

const ENVIRONMENT = {}

ENVIRONMENT.development = {
  browser: {
    headless: false,
    devtools: true,
  },
}
ENVIRONMENT.production = {
  browser: {
    headless: true,
    devtools: false,
  },
}

const DESIRED_ENVIRONMENT =
  typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : false

const ENVIRONMENT_TO_RETURN =
  DESIRED_ENVIRONMENT && typeof ENVIRONMENT[DESIRED_ENVIRONMENT] == 'Object'
    ? ENVIRONMENT[DESIRED_ENVIRONMENT]
    : ENVIRONMENT.development
module.exports = ENVIRONMENT_TO_RETURN
