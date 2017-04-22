
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments()
    table.string('username').notNullable()
    table.string('email').notNullable()
    table.specificType('hashed_pw', 'char(60)').notNullable()
    table.integer('avatar_url').notNullable() //I'm having second thoughts about url's being integers. Will that make it harder to implement it into handlebars stuff?
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
}
