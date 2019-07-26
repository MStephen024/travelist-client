'use strict'

const config = require('../config.js')
const store = require('../store.js')

const indexLocations = function () {
  return $.ajax({
    url: config.apiUrl + '/locations',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createLocation = function (data) {
  console.log('in API')
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/locations',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const showLocations = function (id) {
  return $.ajax({
    url: config.apiUrl + '/locations/' + store.location.id,
    method: 'GET'
    // headers: {
    //   Authorization: 'Token token=' + store.user.token
    // }
  })
}

const destroyLocation = (locationId) => {
  console.log('the errror is here')
  return $.ajax({
    url: config.apiUrl + '/locations/' + locationId,
    method: 'DELETE'
  })
}

const updateLocation = function (data) {
  return $.ajax({
    url: config.apiUrl + '/locations/' + store.location.id,
    method: 'PATCH',
    data: data
  })
}

module.exports = {
  indexLocations,
  createLocation,
  showLocations,
  destroyLocation,
  updateLocation
}
