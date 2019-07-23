'use strict'

const config = require('../config.js')
const store = require('../store.js')

const indexLocation = function (id) {
  return $.ajax({
    url: config.apiUrl + '/locations',
    method: 'GET',
    headers: {
      authorization: 'Token token=' + store.user.token
    }
  })
}

const showLocation = function (id) {
  return $.ajax({
    url: config.apiUrl + '/locations/' + store.game.id,
    method: 'GET',
    headers: {
      authorization: 'Token token=' + store.user.token
    }
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

const createLocation = function (data) {
  return $.ajax({
    url: config.apiUrl + '/locations',
    method: 'POST',
    data: {},
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  indexLocation,
  showLocation,
  destroyLocation,
  updateLocation,
  createLocation
}
