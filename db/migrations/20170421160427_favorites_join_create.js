
exports.up = function (knex) {
  return knex.schema.createTable('favorites_join', (table) => {
    table.increments()
    table.integer('user_id').notNullable().references('id').inTable('users').onDelete('CASCADE').index()
    table.integer('activity_id').notNullable().references('id').inTable('activities').onDelete('CASCADE').index()
    table.timestamps(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('favorites_join')
}
