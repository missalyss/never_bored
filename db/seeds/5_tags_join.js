
exports.seed = function (knex) {
  return knex('tags_join').del()
    .then(function () {
      return knex('tags_join').insert([
        {
          id: 1,
          activities_id: 1,
          categories_id: 3
        },
        {
          id: 2,
          activities_id: 2,
          categories_id: 2
        },
        {
          id: 3,
          activities_id: 3,
          categories_id: 4
        },
        {
          id: 4,
          activities_id: 4,
          categories_id: 5
        },
        {
          id: 5,
          activities_id: 5,
          categories_id: 3
        },
        {
          id: 6,
          activities_id: 6,
          categories_id: 1
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
