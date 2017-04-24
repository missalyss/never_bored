
exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments()
    table.string('username').notNullable()
    table.string('email').notNullable()
    table.specificType('hashed_pw', 'char(60)').notNullable()
    table.text('avatar_url').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
