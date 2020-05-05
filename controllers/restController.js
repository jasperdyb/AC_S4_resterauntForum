const db = require('../models')
const Restaurant = db.Restaurant
const Category = db.Category

const restController = {
  getRestaurants: (req, res) => {
    let whereQuery = {}
    let categoryId = ''
    if (req.query.categoryId) {
      categoryId = Number(req.query.categoryId)
      whereQuery['CategoryId'] = categoryId
    }

    Restaurant.findAll({
      raw: true,
      nest: true,
      include: Category,
      where: whereQuery
    })
      .then(restaurants => {
        restaurants = restaurants.map(r => ({
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
            categoryId: categoryId
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