
exports.seed = function(knex, Promise) {
  return knex('activities').del()
    .then(function () {
      return knex('activities').insert([
        {
          id: 1, title: 'Bad Movies Series', description: 'Who doesn\'t love to make fun of terrible movies with their friends? Try this series of bad movies, either as a marathon or a weekly event. 1. The Room 2. Troll 2 3. Birdemic 4. Titanic 2. Time commitment refers to each film, not the series.', cost: 1, energy: 1, time: 2, location: 2, party: 3, adult: true, img_url: 'http://fillmurray.com/100/100', creator_id: 1
        },
        {
          id: 2, title: 'rowValue2', description: 'description', cost: 2, energy: 2, time: 2, location: 2, party: 2, adult: false, img_url: 'http://fillmurray.com/100/100', creator_id: 2
        },
        {
          id: 3, title: 'rowValue3', description: 'description', cost: 2, energy: 2, time: 2, location: 2, party: 2, adult: false, img_url: 'http://fillmurray.com/100/100', creator_id: 2
        },
        {
          id: 4, title: 'rowValue3', description: 'description', cost: 2, energy: 2, time: 2, location: 2, party: 2, adult: false, img_url: 'http://fillmurray.com/100/100', creator_id: 2
        },
        {
          id: 5, title: 'rowValue3', description: 'description', cost: 2, energy: 2, time: 2, location: 2, party: 2, adult: false, img_url: 'http://fillmurray.com/100/100', creator_id: 2
        },
         {
           id: 6, title: 'rowValue3', description: 'description', cost: 2, energy: 2, time: 2, location: 2, party: 2, adult: false, img_url: 'http://fillmurray.com/100/100', creator_id: 2
         }
      ])
    }).then(function () {
        return knex.raw(
          "SELECT setval('activities_id_seq', (SELECT MAX (id) FROM activities))"
      )
  }).catch(function (error) {
      console.error("Oops! ", error)
  })
}
