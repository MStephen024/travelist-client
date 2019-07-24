const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onIndexLocations = event => {
  event.preventDefault()
  console.log('onIndexLocations ran!')

  api.indexLocations()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

const onCreateLocation = event => {
  event.preventDefault()
  console.log('onCreateLocation ran!')

  const data = getFormFields(event.target)
  api.createLocation(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

const onShowLocations = event => {
  event.preventDefault()
  console.log('onShowLocations ran!')

  const data = getFormFields(event.target)
  const location = data.location

  if (location.id.length !== 0) {
    api.showLocations(location)
      .then(ui.onShowSuccess)
      .catch(ui.onShowFailure)
  } else {
    $('#message').html('<p>Please provide a location id!</p>')
    $('#message').css('background-color', 'red')
    console.log('Please enter a location id!')
  }
}

const onDeleteLocation = function (event) {
  event.preventDefault()
  console.log('onDeleteLocation ran!')

  const data = getFormFields(event.target)
  const location = data.location

  if (location.id.length !== 0) {
    api.destroyLocation(location.id)
      .then(ui.onDeleteSuccess)
      .catch(ui.onDeleteFailure)
  } else {
    $('#message').html('<p>Please provide an location id!</p>')
    $('#message').css('background-color', 'red')
    console.log('Please provide an location id!')
  }
}
//
// const onUpdateLocation = function (event) {
//   event.preventDefault()
//   console.log('onUpdateLocation ran!')
//
//   const data = getFormFields(event.target)
//   const location = data.location
//
//   if (location.text === '') {
//     $('#message').html('<p>Text is required</p>')
//     $('#message').css('background-color', 'red')
//     console.log('Text is required!')
//     return false
//   }
//   if (location.id.length !== 0) {
//     api.updateLocation(data)
//       .then(ui.onUpdateSuccess)
//       .catch(ui.onUpdateFailure)
//   } else {
//     $('#message').html('<p>Please provide an location id!</p>')
//     $('#message').css('background-color', 'red')
//     console.log('Please provide an location id!')
//   }
// }

const addHandlers = () => {
  $('#index-locations').on('click', onIndexLocations)

  $('#create-location').on('click', onCreateLocation)
  $('#show-locations').on('click', onShowLocations)
  $('#delete-location').on('click', onDeleteLocation)
  // $('#update-location').on('click', onUpdateLocation)
}

module.exports = {
  addHandlers
}
