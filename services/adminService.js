const db = require('../models')
const Restaurant = db.Restaurant
const User = db.User
const Category = db.Category
const fs = require('fs')
const imgur = require('imgur-node-api')
const IMGUR_CLIENT_ID = process.env.IMGUR_CLIENT_ID

const adminService = {
  getRestaurants: (req, res, callback) => {
    return Restaurant.findAll({
      order: [['id', 'ASC']],
      raw: true,
      nest: true,
      include: [{ model: Category, attributes: ['name'] }]
    }).then(restaurants => {
      callback({ restaurants: restaurants })
    })
  },

  createRestaurant: (req, res, callback) => {
    Category.findAll({
      raw: true,
      nest: true
    }).then(categories => {
      return callback({
        categories: categories
      })
    })
  },

  postRestaurant: (req, res, callback) => {
    if (!req.body.name) {
      return callback({ status: 'error', message: "name didn't exist" })
    }

    const { file } = req
    if (file) {
      imgur.setClientID(IMGUR_CLIENT_ID);
      imgur.upload(file.path, (err, img) => {
        return Restaurant.create({
          name: req.body.name,
          tel: req.body.tel,
          address: req.body.address,
          opening_hours: req.body.opening_hours,
          description: req.body.description,
          CategoryId: req.body.categoryId,
          image: file ? img.data.link : null,
        }).then((restaurant) => {
          callback({ status: 'success', message: 'restaurant was successfully created' })
        })
      })
    }
    else {
      return Restaurant.create({
        name: req.body.name,
        tel: req.body.tel,
        address: req.body.address,
        opening_hours: req.body.opening_hours,
        description: req.body.description,
        CategoryId: req.body.categoryId
      })
        .then((restaurant) => {
          callback({ status: 'success', message: 'restaurant was successfully created' })
        })
    }

  },

  getRestaurant: (req, res, callback) => {
    return Restaurant.findByPk(req.params.id, {
      raw: true,
      nest: true,
      include: [{ model: Category, attributes: ['name'] }]
    }).then(restaurant => {
      callback({ restaurant: restaurant })
    })
  },

  editRestaurant: (req, res, callback) => {
    Category.findAll({
      raw: true,
      nest: true
    }).then(categories => {
      return Restaurant.findByPk(req.params.id, {
        raw: true,
        nest: true,
        include: [{ model: Category, attributes: ['name'] }]
      }).then(restaurant => {
        return callback({ restaurant: restaurant, categories: categories })
      })
    })
  },

  putRestaurant: (req, res, callback) => {
    if (!req.body.name) {
      return callback({ status: 'error', message: "name didn't exist" })
    }

    const { file } = req
    if (file) {
      imgur.setClientID(IMGUR_CLIENT_ID);
      imgur.upload(file.path, (err, img) => {
        return Restaurant.findByPk(req.params.id)
          .then((restaurant) => {
            restaurant.update({
              name: req.body.name,
              tel: req.body.tel,
              address: req.body.address,
              opening_hours: req.body.opening_hours,
              description: req.body.description,
              CategoryId: req.body.categoryId,
              image: file ? img.data.link : restaurant.image,
            })
              .then((restaurant) => {
                callback({ status: 'success', message: 'restaurant was successfully updated' })
              })
          })
      })
    }
    else {
      return Restaurant.findByPk(req.params.id)
        .then((restaurant) => {
          restaurant.update({
            name: req.body.name,
            tel: req.body.tel,
            address: req.body.address,
            opening_hours: req.body.opening_hours,
            description: req.body.description,
            CategoryId: req.body.categoryId
          })
            .then((restaurant) => {
              callback({ status: 'success', message: 'restaurant was successfully updated' })
            })
        })
    }
  },

  deleteRestaurant: (req, res, callback) => {
    return Restaurant.findByPk(req.params.id)
      .then((restaurant) => {
        restaurant.destroy()
          .then((restaurant) => {
            callback({ status: 'success', message: '' })
          })
      })
  },

  getUsers: (req, res, callback) => {
    return User.findAll({
      order: [['id', 'ASC']],
      raw: true
    }).then(users => {
      return callback({ users: users, currentUserEmail: req.user.email })
    })
  },

  // putUsers: (req, res) => {
  //   return User.findByPk(req.params.id)
  //     .then((user) => {
  //       user.update({
  //         isAdmin: !user.isAdmin
  //       })
  //         .then((user) => {
  //           req.flash('success_messages', 'Administration updated!')
  //           res.send() //respond success to jquery.put()
  //         })
  //     })
  // }
}

module.exports = adminService