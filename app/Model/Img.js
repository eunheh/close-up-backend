'use strict'

const Lucid = use('Lucid')

class Img extends Lucid {

  comments () {
    return this.hasMany('App/Model/Comment')
  }

}

module.exports = Img
