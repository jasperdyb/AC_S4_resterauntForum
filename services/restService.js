const db = require('../models')
const sequelize = require('sequelize')
const Restaurant = db.Restaurant
const Category = db.Category
const Comment = db.Comment
const User = db.User
const Favorite = db.Favorite
const pageLimit = 12

const restService = {
  getRestaurants: (req, res, callback) => {
    let offset = 0
    let whereQuery = {}
    let categoryId = ''
    if (req.query.page) {
      offset = (req.query.page - 1) * pageLimit
    }

    if (req.query.categoryId) {
      categoryId = Number(req.query.categoryId)
      whereQuery['CategoryId'] = categoryId
    }

    Restaurant.findAndCountAll({
      raw: true,
      nest: true,
      order: [['id', 'ASC']],
      include: Category,
      where: whereQuery,
      offset: offset,
      limit: pageLimit
    })
      .then(result => {
        let currentPage = Number(req.query.page) || 1
        let pages = Math.ceil(result.count / pageLimit)
        let totalPage = Array.from({ length: pages }).map((item, index) => index + 1)
        let prev = currentPage - 1 < 1 ? 1 : currentPage - 1
        let next = currentPage + 1 > pages ? pages : currentPage + 1

        restaurants = result.rows.map(r => ({
          ...r,
          description: r.description.substring(0, 50),
          categoryName: r.Category.name,
          isFavorited: req.user.FavoritedRestaurants.map(d => d.id).includes(r.id),
          isLiked: req.user.LikedRestaurants.map(d => d.id).includes(r.id)
        }))

        Category.findAll({
          raw: true,
          nest: true
        }).then(categories => { // 取出 categories 
          return callback({
            restaurants: restaurants,
            categories: categories,
            categoryId: categoryId,
            currentPage: currentPage,
            totalPage: totalPage,
            prev: prev,
            next: next
          })
        })
      })
  },

  getRestaurant: (req, res, callback) => {
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
      return callback({
        restaurant: restaurant.toJSON(),
        isFavorited: isFavorited,
        isLiked: isLiked,
      })
    })
  },

  getFeeds: (req, res, callback) => {
    return Restaurant.findAll({
      limit: 10,
      raw: true,
      nest: true,
      order: [['createdAt', 'DESC']],
      include: [Category]
    }).then(restaurants => {
      Comment.findAll({
        limit: 10,
        raw: true,
        nest: true,
        order: [['createdAt', 'DESC']],
        include: [User, Restaurant]
      }).then(comments => {
        return callback({
          restaurants: restaurants,
          comments: comments
        })
      })
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

  getTopRestaurants: (req, res, callback) => {

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
      return callback({ restaurants: restaurants })
    })
  }
}

module.exports = restService