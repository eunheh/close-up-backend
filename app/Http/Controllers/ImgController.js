'use strict'

const Img = use("App/Model/Img")

class ImgController {

  * post (request, response) {
    let data = request.only('title', 'url', 'count')
    let post = yield Img.create(data)

    response.status(201).json(post)
  }

  * index (request, response) {
    let imgId = request.param('id')
    let allImg = yield Img.query()

    response.status(200).json(allImg)
  }

  * single (request, response) {
    let imgId = request.param('id')
    let singleImg = yield Img.findBy('id', imgId)

    response.status(200).json(singleImg)
  }

  * update (request, response) {
    let imgId = request.param('id')
    let updateCount = yield Img.findBy('id', imgId)
    updateCount.fill(request.only('count'))
    yield updateCount.save()

    response.status(200).json(updateCount)
  }

  * delete (request, response) {
  let imgId = request.param('id')
  let removeImg = yield Img.findBy('id', imgId)
  yield removeImg.delete()

  response.status(200).json({ Img: "That was close!" })
  }

}

module.exports = ImgController
