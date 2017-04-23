
exports.seed = function(knex, Promise) {
  return knex('activities').del()
    .then(function () {
      return knex('activities').insert([
        {id: 1, title: 'rowValue1', description: 'description', cost: 2, energy: 2, time: 2, location: 2, party: 2, adult: false, img_url: 'http://fillmurray.com/100/100', creator_id: 2},
        {id: 2, title: 'rowValue2', description: 'description', cost: 2, energy: 2, time: 2, location: 2, party: 2, adult: false, img_url: 'http://fillmurray.com/100/100', creator_id: 2},
        {id: 3, title: 'rowValue3', description: 'description', cost: 2, energy: 2, time: 2, location: 2, party: 2, adult: false, img_url: 'http://fillmurray.com/100/100', creator_id: 2}
      ])
    }).then(function () {
        return knex.raw(
          "SELECT setval('activities_id_seq', (SELECT MAX (id) FROM activities))"
      )
  }).catch(function (error) {
      console.error("Oops! ", error)
  })
}
