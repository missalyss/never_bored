
exports.seed = function (knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {id: 1, username: 'missalyss', email: 'missalyss@email.com', hashed_pw: '$2a$12$NsNcOHXZk70ioLQMw.4iF.qs0L7oz//5cGdxfAfMbAolSBUIGVcGG', avatar_url: 'http://fillmurray.com/80/80'},
        {id: 2, username: 'andromeda111', email: 'andromeda111@email.com', hashed_pw: '', avatar_url: 'http://fillmurray.com/80/80'},
        {id: 3, username: 'amaliaclaire', email: 'amaliaclaire@email.com', hashed_pw: '', avatar_url: 'http://fillmurray.com/80/80'}
      ])
    }).then(function () {
      return knex.raw(
          "SELECT setval('users_id_seq', (SELECT MAX (id) FROM users))"
      )
    }).catch(function (error) {
      console.error('Oops! ', error)
    })
}
