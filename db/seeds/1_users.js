
exports.seed = function (knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {id: 1, username: 'missalyss', email: 'missalyss@email.com', hashed_pw: '$2a$12$NsNcOHXZk70ioLQMw.4iF.qs0L7oz//5cGdxfAfMbAolSBUIGVcGG', avatar_url: 'http://www.globaltimes.cn/Portals/0/attachment/2015/2015-11-02/3d8cd0c9-2946-4ed6-8aff-003a4d6f2b43.jpeg'},
        {id: 2, username: 'andromeda111', email: 'andromeda111@email.com', hashed_pw: '$2a$12$oPaBCIouuMuTeh87c39tQOU1FCr4I/1LYTlzxapOuDNzssV2k6zxO', avatar_url: 'http://wackynerd.com/wp-content/uploads/2015/09/baby-fox.jpg'},
        {id: 3, username: 'amaliaclaire', email: 'amaliaclaire@email.com', hashed_pw: '$2a$12$B2EgfmKfpVptsaLV24xq6OAZLMTLuP741u5pfnXj9UbDNbzTu6ZsW', avatar_url: 'http://www.geokitten.com/i/2.jpg'}
      ])
    }).then(function () {
      return knex.raw(
          "SELECT setval('users_id_seq', (SELECT MAX (id) FROM users))"
      )
    }).catch(function (error) {
      console.error('Oops! ', error)
    })
}
