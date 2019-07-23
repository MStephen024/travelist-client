'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const authEvents = require('./auth/events')
const locationEvents = require('./location/events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // Auth
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)

  // Locations
  $('#create-location').on('click', locationEvents.onStartLocation)
  $('#index-locations').on('click', locationEvents.onGetLocations)
})
