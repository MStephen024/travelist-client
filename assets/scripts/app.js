'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const authEvents = require('./auth/events')
const locationEvents = require('./location/events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // Auth
  authEvents.addHandlers()

  // Locations
  locationEvents.addHandlers()
})
