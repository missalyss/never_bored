
exports.seed = function (knex) {
  return knex('favorites_join').del()
    .then(function () {
      return knex('favorites_join').insert([
        {
          id: 1,
          user_id: 1,
          activity_id: 1
        },
        {
          id: 2,
          user_id: 1,
          activity_id: 2
        },
        {
          id: 3,
          user_id: 2,
          activity_id: 2
        },
        {
          id: 4,
          user_id: 2,
          activity_id: 3
        },
        {
          id: 5,
          user_id: 3,
          activity_id: 3
        },
        {
          id: 6,
          user_id: 3,
          activity_id: 4
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
