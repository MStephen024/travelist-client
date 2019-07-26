'use strict'

const locationsTemplate = require('../templates/locations.handlebars')

const onCreateSuccess = function (data) {
  $('#message').text('Location successfully created')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('onCreateSuccess ran. Data is :', data)
}

const onCreateFailure = function (error) {
  $('#message').text('Error on creating location')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onCreateFailure ran. Error is :', error)
}

const onIndexSuccess = function (data) {
  $('#message').text('All Location successfully received')
  $('#message').removeClass('failure')
  $('#message').addClass('success')

  // 2. Use the template file as a function
  // 3. Pass the template file an object as an argument
  // 4. Will return an interpolated HTML string
  const locationsHtml = locationsTemplate({
    locations: data.locations })
  // 5. Insert HTML string onto the page using jQuery
  // use .append or .html
  $('.content').html(locationsHtml)

  console.log('onIndexSuccess ran. Data is :', data.locations)
}

const onIndexFailure = function (error) {
  $('#message').text('Error on getting location')
  $('#message').removeClass('success')
  $('#message').addClass('failure')
  console.error('onIndexFailure ran. Error is :', error)
}

const onShowSuccess = function (data) {
  $('#message').text('One Location successfully received')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('onCreateSuccess ran. Data is :', data)
}

const onShowFailure = function (error) {
  $('#message').text('Error on getting location')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onShowFailure ran. Error is :', error)
}

const onDestroySuccess = function () {
  $('#message').text('Location successfully deleted')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('.content').empty()
  console.log('Example successfully deleted')
}

const onDestroyFailure = function (error) {
  $('#message').text('Error on deleting location')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onDestroyFailure ran. Error is :', error)
}

const onUpdateSuccess = function () {
  $('#message').text('Location successfully updated')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('Location successfully updated')
}

const onUpdateFailure = function (error) {
  $('#message').text('Error on updating location')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onUpdateFailure ran. Error is :', error)
}

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onIndexSuccess,
  onIndexFailure,
  onShowSuccess,
  onShowFailure,
  onDestroySuccess,
  onDestroyFailure,
  onUpdateSuccess,
  onUpdateFailure
}
