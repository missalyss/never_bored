
exports.up = function (knex) {
  return knex.schema.createTable('favorites_join', (table) => {
    table.increments()
    table.integer('user_id').notNullable()
    table.integer('activity_id').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('favorites_join')
}
