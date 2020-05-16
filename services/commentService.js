const db = require('../models')
const Comment = db.Comment
let commentService = {
  postComment: (req, res, callback) => {
    return Comment.create({
      text: req.body.text,
      RestaurantId: req.body.restaurantId,
      UserId: req.user.id
    })
      .then((comment) => {
        callback({ status: "success", message: 'Comment successfully posted.', comment: comment })
      })
  },
  deleteComment: (req, res, callback) => {
    return Comment.findByPk(req.params.id)
      .then((comment) => {
        comment.destroy()
          .then((comment) => {
            callback({ status: "success", message: 'Comment successfully deleted.', comment: comment })
          })
      })
  }
}

module.exports = commentService