exports.seed = function (knex) {
  return knex('categories').del()
    .then(function () {
      return knex('categories').insert([
        {
          id: 1,
          name: 'Active'
        },
        {
          id: 2,
          name: 'Creative'
        },
        {
          id: 3,
          name: 'Entertainment'
        },
        {
          id: 4,
          name: 'Food'
        },
        {
          id: 5,
          name: 'Relaxing'
        },
        {
          id: 6,
          name: 'Romantic'
        },
        {
          id: 7,
          name: 'Social'
        }
      ])
    }).then(function () {
      return knex.raw(
          "SELECT setval('categories_id_seq', (SELECT MAX (id) FROM categories))"
      )
    }).catch(function (error) {
      console.error('Oops! ', error)
    })
}
