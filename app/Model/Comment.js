'use strict'

const Lucid = use('Lucid')

class Comment extends Lucid {

  imgs () {
    return this.belongsTo('App/Model/Img')
  }


}

module.exports = Comment
