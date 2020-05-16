const db = require('../models')
const sequelize = require('sequelize')
const Restaurant = db.Restaurant
const Category = db.Category
const Comment = db.Comment
const User = db.User
const Favorite = db.Favorite
const pageLimit = 12
const restService = require('../services/restService.js')

const restController = {
  getRestaurants: (req, res) => {

    restService.getRestaurants(req, res, (data) => {
      return res.render('restaurants', data)
    })

  },

  getRestaurant: (req, res) => {
    restService.getRestaurant(req, res, (data) => {
      return res.render('restaurant', data)
    })
  },

  getFeeds: (req, res) => {
    restService.getFeeds(req, res, (data) => {
      return res.render('feeds', data)
    })
  },

  getDashboard: (req, res) => {
    restService.getDashboard(req, res, (data) => {
      return res.render('dashboard', data)
    })
  },

  getTopRestaurants: (req, res) => {
    restService.getTopRestaurants(req, res, (data) => {
      return res.render('topRestaurants', data)
    })
  }
}

module.exports = restController