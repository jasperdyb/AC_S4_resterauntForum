const db = require('../../models')
const Restaurant = db.Restaurant
const Category = db.Category
const User = db.User
const adminService = require('../../services/adminService.js')

const adminController = {
  getRestaurants: (req, res) => {
    adminService.getRestaurants(req, res, (data) => {
      return res.json(data)
    })
  },
  getRestaurant: (req, res) => {
    adminService.getRestaurant(req, res, (data) => {
      return res.json(data)
    })
  },
  createRestaurant: (req, res) => {
    adminService.createRestaurant(req, res, (data) => {
      return res.json(data)
    })
  },
  editRestaurant: (req, res) => {
    adminService.editRestaurant(req, res, (data) => {
      return res.json(data)
    })
  },
  putRestaurant: (req, res) => {
    adminService.putRestaurant(req, res, (data) => {
      return res.json(data)
    })
  },

  postRestaurant: (req, res) => {
    adminService.postRestaurant(req, res, (data) => {
      return res.json(data)
    })
  },

  deleteRestaurant: (req, res) => {
    return Restaurant.findByPk(req.params.id)
      .then((restaurant) => {
        restaurant.destroy()
          .then((restaurant) => {
            res.json({ status: 'success', message: '' })
          })
      })
  },

  getUsers: (req, res) => {
    adminService.getUsers(req, res, (data) => {
      return res.json(data)
    })
  },

  putUsers: (req, res) => {
    return User.findByPk(req.params.id)
      .then((user) => {
        user.update({
          isAdmin: !user.isAdmin
        })
          .then((user) => {
            return res.json({ status: 'success', message: `user id ${user.id}\'s administration updated!` })
          })
      })
  }
}
module.exports = adminController