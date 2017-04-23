
exports.seed = function(knex, Promise) {
  return knex('tags_join').del()
    .then(function () {
      return knex('tags_join').insert([
        {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ])
    }).then(function () {
        return knex.raw(
          "SELECT setval('tags_join_id_seq', (SELECT MAX (id) FROM tags_join))"
      )
  }).catch(function (error) {
      console.error("Oops! ", error)
  })
}
