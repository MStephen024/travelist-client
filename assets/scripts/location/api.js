'use strict'

const config = require('../config.js')
const store = require('../store.js')

const indexLocations = function () {
  return $.ajax({
    url: config.apiUrl + '/locations',
    method: 'GET'
    // headers: {
    //   Authorization: 'Token token=' + store.user.token
    // }
  })
}

const createLocation = function (data) {
  return $.ajax({
    url: config.apiUrl + '/locations',
    method: 'POST',
    // headers: {
    //   Authorization: 'Token token=' + store.user.token
    // },
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

const destroyLocation = function (id) {
  return $.ajax({
    url: config.apiUrl + '/locations/' + id,
    method: 'DELETE'
  })
}

const updateLocation = function (data) {
  return $.ajax({
    url: config.apiUrl + '/locations/' + store.location.id,
    method: 'PATCH',
    data
  })
}

module.exports = {
  indexLocations,
  createLocation,
  showLocations,
  destroyLocation,
  updateLocation
}
