
exports.seed = function (knex) {
  return knex('activities').del()
    .then(function () {
      return knex('activities').insert([
        {
          id: 1,
          title: 'Bad Movies Series',
          description: 'Who doesn\'t love to make fun of terrible movies with their friends? Try this series of bad movies, either as a marathon or a weekly event. . The Room 2. Troll 2 3. Birdemic 4. Titanic 2. Time commitment refers to each film, not the series.',
          cost: '💰',
          energy: '⚡️',
          time: '⏳⏳',
          location: '🏠',
          party: '😎',
          adult: '🥂',
          img_url: 'https://s-media-cache-ak0.pinimg.com/736x/57/db/f7/57dbf7bc5df8e6ae737ca3480cb7f430.jpg',
          creator_id: 1
        },
        {
          id: 2,
          title: 'Sidewalk Chalk',
          description: 'Go outside with some sdewalk chalk with the kids and start building! Make a hop scotch, or a city, or a zoo filled with animals.',
          cost: '💰',
          energy: '⚡️⚡️',
          time: '⏳⏳⏳',
          location: '🌳',
          party: '👶',
          adult: '🥛',
          img_url: 'https://s-media-cache-ak0.pinimg.com/564x/1e/f4/64/1ef4647e3a8a1397834e9dc70440de13.jpg',
          creator_id: 1
        },
        {
          id: 3,
          title: 'Picnic at the Park',
          description: 'Go to the grocery store with a date. Pick out your favorite things at the deli and a fun dessert to shar. Go to the nearest park or one of your favorite parks and enjoy! Don\'t forget a blanket or mat to sit on!',
          cost: '💰💰',
          energy: '⚡️⚡️',
          time: '⏳⏳',
          location: '🌳',
          party: '❤️',
          adult: '🥛',
          img_url: 'http://i.dailymail.co.uk/i/pix/2014/02/15/article-2560034-1B832D0200000578-122_634x616.jpg',
          creator_id: 2
        },
        {
          id: 4,
          title: 'Bath and TV',
          description: 'Treat yo\'self! Bring a laptop in the bath and situate it so you can see it from the water. Get a nice warm bath with bubbles (or not) and surround yourself with candles and treats. Have a hand towel next to the tub so you can operate yur computer without getting it wet. I recommend Star Trek or Twilight zone, but whatever floats your boat.',
          cost: '💰',
          energy: '⚡️',
          time: '⏳',
          location: '🏠',
          party: '🙋',
          adult: '🥛',
          img_url: 'https://scontent-ams3-1.cdninstagram.com/t51.2885-15/e15/10665492_1480893262169813_1981530872_n.jpg',
          creator_id: 2
        },
        {
          id: 5,
          title: 'Casino Night!',
          description: 'Find the nearest caino to you, dress up, and get over there! Bring cash and cigarettes and don\'t forget to tip your dealer',
          cost: '💰💰💰',
          energy: '⚡️⚡️⚡️',
          time: '⏳⏳⏳',
          location: '🏠',
          party: '😎',
          adult: '🥂',
          img_url: 'https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/11374630_1868753643350557_935003662_n.jpg',
          creator_id: 3
        },
        {
          id: 6,
          title: 'Dog Park',
          description: 'Don\'t have a dog? Find a dog! They don\'t quite let people just into the dog park. So find a friend who has a dog, and either invite the two of tem to come along, or offer to give them the day off. Grab some friends, grab a tennis ball, and go play.',
          cost: '💰',
          energy: '⚡️⚡️',
          time: '⏳',
          location: '🌳',
          party: '😎',
          adult: '🥛',
          img_url: 'https://s-media-cache-ak0.pinimg.com/originals/9f/be/e5/9fbee54170da7b16b0c4558ba15fff30.jpg',
          creator_id: 3
        },
        {
          id: 7,
          title: 'Hiking',
          description: 'How to get the best instgram picture in order to get the most likes? Go hiking. Mix your physica pleasure with a splash of nature. take them npm "candid shots" but honestly we all know that you\'re lying.',
          cost: '💰',
          energy: '⚡️⚡️⚡️',
          time: '⏳⏳',
          location: '🌳',
          party: '😎',
          adult: '🥛',
          img_url: 'https://scontent-ams3-1.cdninstagram.com/t51.2885-15/e35/18014042_1793653427617745_383950718844796928_n.jpg',
          creator_id: 3
        },
        {
          id: 8,
          title: 'Mariners Baseball',
          description: 'Spoil your honey by taking them to a fun, relaxing (not usually winning) baseball game at Safecofield. Yeah, we don\'t win too often, and the mariners are lowest in the league. But hey, there\'s beer.',
          cost: '💰💰',
          energy: '⚡️',
          time: '⏳⏳⏳',
          location: '🌳',
          party: '❤️',
          adult: '🥛',
          img_url: 'https://scontent-ams3-1.cdninstagram.com/t51.2885-15/e35/17882784_1857598011171560_5300994038546038784_n.jpg',
          creator_id: 2
        },
        {
          id: 9,
          title: 'Fort Building',
          description: 'I mean...Who can hate forts? Incredibly fun for the whole family. Once you\'re done building, play a game or watch a movie inside!',
          cost: '💰',
          energy: '⚡️⚡️',
          time: '⏳⏳',
          location: '🏠',
          party: '👶',
          adult: '🥛',
          img_url: 'https://scontent-ams3-1.cdninstagram.com/t51.2885-15/e35/18095050_634483400090832_6667349763924426752_n.jpg',
          creator_id: 2
        },
        {
          id: 10,
          title: 'Keys On Main: Ladies Night',
          description: 'Piano Dueling Bar. Drinks semi cheap, fun = extreme',
          cost: '💰💰',
          energy: '⚡️⚡️',
          time: '⏳⏳',
          location: '🏠',
          party: '😎',
          adult: '🥂',
          img_url: 'https://scontent-ams3-1.cdninstagram.com/t51.2885-15/s750x750/sh0.08/e35/12479271_1713451105567232_1896726334_n.jpg',
          creator_id: 2
        },
        {
          id: 11,
          title: 'Netflix and Chill',
          description: '15 minutes into Netflix n chill and you tryna figure out how you gonna make this transition. Watch a movie you\'re both into, but not SO into that you\'ll be bummed if you miss the ending 😉',
          cost: '💰',
          energy: '⚡️',
          time: '⏳⏳⏳',
          location: '🏠',
          party: '❤️',
          adult: '🥂',
          img_url: 'https://scontent-ams3-1.cdninstagram.com/t51.2885-15/e35/18095100_1896851140558591_7346750333873291264_n.jpg',
          creator_id: 1
        },
        {
          id: 12,
          title: 'Thai Tom and Good Will',
          description: 'Thai Tom is the best Thai food in Seattle. They usually have a line that queues outside, so after you put your name in, cross the street to Good Will and look around at weird and goofy stuff. Hygine (at both locations) comes at a concern, but totally worth the trip to the emergency room. At Thai Tom, get the Poor Manodle or classic Chicken Phad Thai is always good.',
          cost: '💰',
          energy: '⚡️',
          time: '⏳',
          location: '🏠',
          party: '❤️',
          adult: '🥂',
          img_url: 'https://scontent-ams3-1.cdninstagram.com/t51.2885-15/e15/10948658_791847364229067_886855096_n.jpg',
          creator_id: 3
        },
        {
          id: 13,
          title: 'Drinking',
          description: 'Solves all social problems',
          cost: '💰💰',
          energy: '⚡️',
          time: '⏳⏳',
          location: '🏠',
          party: '😎',
          adult: '🥂',
          img_url: 'https://247wallst.files.wordpress.com/2016/05/cheers-people-drinking-beer-e1463151962112.jpg?w=400',
          creator_id: 3
        },
        {
          id: 14,
          title: 'Seahawks',
          description: 'SEAHAWKS BABY LIVE AND BREATHE',
          cost: '💰💰💰',
          energy: '⚡️⚡️⚡️',
          time: '⏳⏳⏳',
          location: '🌳',
          party: '👶',
          adult: '🥛',
          img_url: 'http://images.scribblelive.com/2013/8/18/9172bc03-a053-48f8-8490-a0fa0752cc50_400.jpg',
          creator_id: 3
        },
        {
          id: 15,
          title: 'Walk Around Greenlake',
          description: 'The path around Greenlake is busy all year long. Grab skates or just use your feet and take a walk around. I\'ts about 3 miles around and its a lovely view the whole way around',
          cost: '💰',
          energy: '⚡️⚡️⚡️',
          time: '⏳⏳',
          location: '🌳',
          party: '🙋',
          adult: '🥛',
          img_url: 'http://www.fiuts.org/events/calendar/Greenlake_3.jpg/@@images/image/preview',
          creator_id: 1
        }

      ])
    }).then(function () {
      return knex.raw(
          "SELECT setval('activities_id_seq', (SELECT MAX (id) FROM activities))"
      )
    }).catch(function (error) {
      console.error('Oops! ', error)
    })
}
