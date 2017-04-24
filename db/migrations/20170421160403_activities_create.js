
exports.up = function (knex) {
  return knex.schema.createTable('activities', (table) => {
    table.increments()
    table.string('title').notNullable()
    table.text('description').notNullable()
    table.string('cost').notNullable()
    table.string('energy').notNullable()
    table.string('time').notNullable()
    table.string('location').notNullable()
    table.string('party').notNullable()
    table.boolean('adult').notNullable()
    table.text('img_url').notNullable()
    table.integer('creator_id').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('activities')
}
