
exports.seed = function (knex) {
  return knex('tags_join').del()
    .then(function () {
      return knex('tags_join').insert([
        {
          id: 1,
          activity_id: 1,
          category_id: 3
        },
        {
          id: 2,
          activity_id: 2,
          category_id: 2
        },
        {
          id: 3,
          activity_id: 3,
          category_id: 4
        },
        {
          id: 4,
          activity_id: 4,
          category_id: 5
        },
        {
          id: 5,
          activity_id: 5,
          category_id: 3
        },
        {
          id: 6,
          activity_id: 6,
          category_id: 1
        }
      ])
    }).then(function () {
      return knex.raw(
          "SELECT setval('tags_join_id_seq', (SELECT MAX (id) FROM tags_join))"
      )
    }).catch(function (error) {
      console.error('Oops! ', error)
    })
}
