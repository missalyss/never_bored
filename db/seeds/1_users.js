
exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {id: 1, username: 'rowValue1', email: 'email@email.com', hashed_pw: '', avatar_url: 'http://fillmurray.com/80/80'},
        {id: 2, username: 'rowValue2', email: 'email@email.com', hashed_pw: '', avatar_url: 'http://fillmurray.com/80/80'},
        {id: 3, username: 'rowValue3', email: 'email@email.com', hashed_pw: '', avatar_url: 'http://fillmurray.com/80/80'}
      ])
    }).then(function () {
        return knex.raw(
          "SELECT setval('users_id_seq', (SELECT MAX (id) FROM users))"
      )
  }).catch(function (error) {
      console.error("Oops! ", error)
  })
}
