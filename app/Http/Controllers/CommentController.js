'use strict'

const Comment = use("App/Model/Comment")

class CommentController {

  * post (request, response) {
    let imgId = request.param('id')
    let data = request.only('comment')
    data.img_id = imgId;
    let post = yield Comment.create(data)

    response.status(201).json(post)
  }

  * index (request, response) {
    let imgId = request.param('id')
    let comments = yield Comment.query().where('img_id',imgId)

    response.status(200).json(comments)
  }

  * delete (request, response) {
  let commentId = request.param('comment_id')
  let deleteComment = yield Comment.find(commentId)
  yield deleteComment.delete()

  response.status(200).json({ Img: "That was close!" })
  }

}

module.exports = CommentController
