
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
          category_id: 6
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
        },
        {
          id: 7,
          activity_id: 7,
          category_id: 1
        },
        {
          id: 8,
          activity_id: 8,
          category_id: 7
        },
        {
          id: 9,
          activity_id: 9,
          category_id: 2
        },
        {
          id: 10,
          activity_id: 10,
          category_id: 3
        },
        {
          id: 11,
          activity_id: 11,
          category_id: 6
        },
        {
          id: 12,
          activity_id: 12,
          category_id: 6
        },
        {
          id: 13,
          activity_id: 13,
          category_id: 7
        },
        {
          id: 14,
          activity_id: 14,
          category_id: 3
        },
        {
          id: 15,
          activity_id: 15,
          category_id: 1
        },
        {
          id: 16,
          activity_id: 16,
          category_id: 4
        },
        {
          id: 17,
          activity_id: 17,
          category_id: 7
        },
        {
          id: 18,
          activity_id: 18,
          category_id: 3
        },
        {
          id: 19,
          activity_id: 19,
          category_id: 6
        },
        {
          id: 20,
          activity_id: 20,
          category_id: 4
        },
        {
          id: 21,
          activity_id: 21,
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
