const db = require('../models')
const Restaurant = db.Restaurant
const Category = db.Category
const pageLimit = 12

const restController = {
  getRestaurants: (req, res) => {
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
          categoryName: r.Category.name
        }))

        Category.findAll({
          raw: true,
          nest: true
        }).then(categories => { // 取出 categories 
          return res.render('restaurants', {
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

  getRestaurant: (req, res) => {
    return Restaurant.findByPk(req.params.id, {
      raw: true,
      nest: true,
      include: Category
    }).then(restaurant => {
      console.log(restaurant)
      return res.render('restaurant', {
        restaurant: restaurant
      })
    })
  }
}

module.exports = restController