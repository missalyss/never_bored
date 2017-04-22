
exports.up = function(knex, Promise) {
  return knex.schema.createTable('categories', (table) => {
    table.increments()
    table.string('name').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('categories')
}
