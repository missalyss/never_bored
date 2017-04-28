
exports.up = function (knex) {
  return knex.schema.createTable('tags_join', (table) => {
    table.increments()
    table.text('image')
    table.timestamps(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('tags_join')
}
