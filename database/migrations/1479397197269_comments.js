'use strict'

const Schema = use('Schema')

class CommentsTableSchema extends Schema {

  up () {
    this.create('comments', (table) => {
      table.increments()
      table.timestamps()
      table.string('comment')
      table.integer('img_id')
    })
  }

  down () {
    this.drop('comments')
  }

}

module.exports = CommentsTableSchema
