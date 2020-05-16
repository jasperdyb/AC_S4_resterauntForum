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
    return Restaurant.findByPk(req.params.id, {
      // raw: true,   //raw didn't work with including hasMany models,it'll only shows the first query
      // nest: true,
      include: [
        { model: Category, attributes: ['id', 'name'] },
        { model: User, as: 'FavoritedUsers' },
        { model: User, as: 'LikedUsers' },
        { model: Comment, include: [{ model: User, attributes: ['id', 'name'] }] }
      ]
    }).then(restaurant => {
      const isFavorited = restaurant.FavoritedUsers.map(d => d.id).includes(req.user.id)
      const isLiked = restaurant.LikedUsers.map(d => d.id).includes(req.user.id)
      restaurant.update({
        viewCount: restaurant.viewCount + 1
      })
      return res.render('restaurant', {
        restaurant: restaurant.toJSON(),
        isFavorited: isFavorited,
        isLiked: isLiked,
      })
    })
  },

  getFeeds: (req, res) => {
    restService.getFeeds(req, res, (data) => {
      return res.render('feeds', data)
    })
  },

  getDashboard: (req, res) => {
    return Restaurant.findByPk(req.params.id, {
      include: [
        { model: Category, attributes: ['id', 'name'] },
        { model: Comment, attributes: ['id'] }
      ]
    }).then(restaurant => {
      return res.render('dashboard', {
        restaurant: restaurant.toJSON()
      })
    })
  },

  getTopRestaurants: (req, res) => {

    return Restaurant.findAll({
      // subquery: false,
      include: [
        {
          model: User,
          as: 'FavoritedUsers',
          attributes: []
        },
      ],
      group: ['Restaurant.id'],
      attributes: {
        include: [
          [sequelize.fn('COUNT', sequelize.col('FavoritedUsers.id')), 'favorite_count'],
        ]
      },
      order: sequelize.literal('favorite_count DESC'),
      subQuery: false,
      limit: 10
    }).then(restaurants => {
      restaurants = restaurants.map(restaurant => ({
        ...restaurant.dataValues,
        description: restaurant.description.substring(0, 50),
        isFavorited: req.user.FavoritedRestaurants.map(d => d.id).includes(restaurant.id),
        isLiked: req.user.LikedRestaurants.map(d => d.id).includes(restaurant.id)
      }))
      return res.render('topRestaurants', { restaurants: restaurants })
    })
  }
}

module.exports = restController