'use strict'

const Img = use("App/Model/Img")

class ImgController {

  * post (request, response) {
    let data = request.only('title', 'url')
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
    let image = yield Img.findBy('id', imgId)
    image.count++
    
    yield image.save()

    response.status(200).json(image)
  }

  * delete (request, response) {
  let imgId = request.param('id')
  let removeImg = yield Img.findBy('id', imgId)
  yield removeImg.delete()

  response.status(200).json({ Img: "That was close!" })
  }

}

module.exports = ImgController
