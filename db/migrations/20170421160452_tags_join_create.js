
exports.up = function (knex) {
  return knex.schema.createTable('tags_join', (table) => {
    table.increments()
    table.integer('activity_id').notNullable().references('id').inTable('activities').onDelete('CASCADE').index()
    table.integer('category_id').notNullable().references('id').inTable('categories').onDelete('CASCADE').index()
    table.timestamps(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('tags_join')
}
