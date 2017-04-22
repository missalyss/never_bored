
exports.up = function(knex, Promise) {
  return knex.schema.createTable('activities', (table) => {
    table.increments()
    table.string('title').notNullable()
    table.text('description').notNullable()
    table.integer('cost').notNullable()
    table.integer('energy').notNullable()
    table.integer('time').notNullable()
    table.integer('location').notNullable()
    table.integer('party').notNullable()
    table.boolean('adult').notNullable()
    table.text('img_url').notNullable()
    table.integer('creator_id').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('activities')
}
