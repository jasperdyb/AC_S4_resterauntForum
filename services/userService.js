const db = require('../models')
const User = db.User
const Comment = db.Comment
const Restaurant = db.Restaurant
const Favorite = db.Favorite
const Like = db.Like
const Followship = db.Followship
const imgur = require('imgur-node-api')
const IMGUR_CLIENT_ID = process.env.IMGUR_CLIENT_ID

const userService = {

  getUser: (req, res, callback) => {
    return User.findByPk(req.params.id, {
      include: [
        { model: Comment, include: [{ model: Restaurant, attributes: ['id', 'name', 'image'] }] },
        { model: Restaurant, as: 'FavoritedRestaurants', attributes: ['id', 'name', 'image'] },
        { model: User, as: 'Followers', attributes: ['id', 'name', 'image'] },
        { model: User, as: 'Followings', attributes: ['id', 'name', 'image'] }
      ]
    }).then(user => {
      const comments = user.toJSON().Comments
      let commentedResId = []
      let commentedRes = []

      comments.forEach(comment => {
        var restaurant = comment.Restaurant
        if (restaurant && !commentedResId.includes(restaurant.id)) {
          commentedResId.push(restaurant.id)
          commentedRes.push(restaurant)
        }
      })
      callback({
        userData: user,
        commentedRes: commentedRes
      }) //make difference with res.locals.user
    })
  },

  editUser: (req, res, callback) => {
    //prevent edit from other users
    if (req.params.id !== String(res.locals.user.id)) {
      return callback({ status: 'error', message: 'user is not the account owner' })
    }

    return User.findByPk(req.params.id, {
      raw: true,
      nest: true
    }).then(user => {

      callback({ status: 'success', userData: user }) //make difference with req.locals.user
    })
  },

  putUser: (req, res, callback) => {
    //prevent edit from other users
    if (req.params.id !== String(res.locals.user.id)) {
      return callback({ status: 'error', message: 'user is not the account owner' })
    }

    if (!req.body.name) {
      req.body.name = res.locals.user.name
    }

    const { file } = req
    if (file) {
      imgur.setClientID(IMGUR_CLIENT_ID);
      imgur.upload(file.path, (err, img) => {
        return User.findByPk(req.params.id)
          .then((user) => {
            user.update({
              name: req.body.name,
              image: file ? img.data.link : user.image,
            })
              .then((user) => {
                // req.flash('success_messages', 'user was successfully to update')
                callback({ status: 'success', message: 'user was successfully updated' })
              })
          })
      })
    }
    else {
      return User.findByPk(req.params.id)
        .then((user) => {
          user.update({
            name: req.body.name
          })
            .then((user) => {
              // req.flash('success_messages', 'user was successfully to update')
              callback({ status: 'success', message: 'user was successfully updated' })
            })
        })
    }
  },

  addFavorite: (req, res, callback) => {
    return Favorite.create({
      UserId: req.user.id,
      RestaurantId: req.params.restaurantId
    })
      .then((favorite) => {
        return callback({ status: "success", message: "", favorite: favorite })
      })
  },

  removeFavorite: (req, res, callback) => {
    return Favorite.findOne({
      where: {
        UserId: req.user.id,
        RestaurantId: req.params.restaurantId
      }
    })
      .then((favorite) => {
        favorite.destroy()
          .then((favorite) => {
            return callback({ status: "success", message: "", favorite: favorite })
          })
      })
  },

  addLike: (req, res, callback) => {
    return Like.create({
      UserId: req.user.id,
      RestaurantId: req.params.restaurantId
    })
      .then((like) => {
        return callback({ status: "success", message: "", like: like })
      })
  },

  removeLike: (req, res, callback) => {
    return Like.findOne({
      where: {
        UserId: req.user.id,
        RestaurantId: req.params.restaurantId
      }
    })
      .then((like) => {
        like.destroy()
          .then((like) => {
            return callback({ status: "success", message: "", like: like })
          })
      })
  },

  getTopUser: (req, res, callback) => {
    // 撈出所有 User 與 followers 資料
    return User.findAll({
      include: [
        { model: User, as: 'Followers' }
      ]
    }).then(users => {
      // 整理 users 資料
      users = users.map(user => ({
        ...user.dataValues,
        // 計算追蹤者人數
        FollowerCount: user.Followers.length,
        // 判斷目前登入使用者是否已追蹤該 User 物件
        isFollowed: req.user.Followings.map(d => d.id).includes(user.id)
      }))
      // 依追蹤者人數排序清單
      users = users.sort((a, b) => b.FollowerCount - a.FollowerCount)
      callback({ users: users, loginUserId: req.user.id })
    })
  },

  addFollowing: (req, res, callback) => {
    console.log(req.params.userId, typeof (req.params.userId))
    return Followship.create({
      followerId: req.user.id,
      followingId: req.params.userId
    })
      .then((followship) => {
        return callback({ status: "success", message: "", followship: followship })
      })
  },

  removeFollowing: (req, res, callback) => {
    return Followship.findOne({
      where: {
        followerId: req.user.id,
        followingId: req.params.userId
      }
    })
      .then((followship) => {
        followship.destroy()
          .then((followship) => {
            return callback({ status: "success", message: "", followship: followship })
          })
      })
  }

}

module.exports = userService