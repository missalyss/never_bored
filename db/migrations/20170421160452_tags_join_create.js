
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tags_join', (table) => {
    table.increments()
    table.integer('activity_id').notNullable()
    table.integer('category_id').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tags_join')
}
