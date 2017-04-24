
exports.seed = function (knex) {
  return knex('favorites_join').del()
    .then(function () {
      return knex('favorites_join').insert([
        {
          id: 1,
          users_id: 1,
          activities_id: 1
        },
        {
          id: 2,
          users_id: 1,
          activities_id: 2
        },
        {
          id: 3,
          users_id: 2,
          activities_id: 2
        },
        {
          id: 4,
          users_id: 2,
          activities_id: 3
        },
        {
          id: 5,
          users_id: 3,
          activities_id: 3
        },
        {
          id: 6,
          users_id: 3,
          activities_id: 4
        }
      ])
    }).then(function () {
      return knex.raw(
          "SELECT setval('favorites_join_id_seq', (SELECT MAX (id) FROM favorites_join))"
      )
    }).catch(function (error) {
      console.error('Oops! ', error)
    })
}
