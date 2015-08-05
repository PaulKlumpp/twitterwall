'use strict'

/*jshint camelcase: false */

var e = process.env

module.exports = {
  title: e.TITLE || '.concat() 2015 Twitterwall',
  hashtag: e.HASHTAG || '#concat15',
  port: e.PORT || 8000,
  twitter: {
    throttle: 1000,
    tracks: (e.HASHTAGS || '#concat,#concat15,#concat2015').split(','),
    users: (e.USERS || 'conc_at').split(','),
    tweetHistory: true,
    auth: {
      access_token: e.ACCESS_TOKEN,
      access_token_secret: e.ACCESS_TOKEN_SECRET,
      consumer_key: e.CONSUMER_KEY,
      consumer_secret: e.CONSUMER_SECRET
    }
  },
  lanyrd: {
    overwriteDate: '2015-03-07', // for debugging
    year: e.LANYRD_YEAR || '2015',
    id: e.LANYRD_ID || 'concat',
    showNext: 15000,
    roomColors: {
      'Audimax': '#c30813',
      'Room 110': '#169c19',
      'Lounge': '#c35a18'
    }
  },
  sites: {
		  // das hilft beim Erstellen der snatchElemente: www.w3schools.com/jquery/trysel.asp
      siteList: [
      {
        // Sonderveranstaltungen > Sneak Preview
        url: 'http://www.kurbel-karlsruhe.de/index.php?targetkino=staticseite&US=3332',
        snatchElement: 'div#content_box', // div with id 'content_box'
        duration: 20000
      },
      {
        // Sonderveranstaltungen > Tatort in der Kurbel
        url: 'http://www.kurbel-karlsruhe.de/index.php?targetkino=staticseite&US=3338',
        snatchElement: 'div#content_box', // div with id 'content_box'
        duration: 20000
      },
      {
        // Sonderprogramm "Tatort"
				url: 'http://kurbel-karlsruhe.de/index.php?show=sond_Sonderprogramm&week=0&sonderr=1',
				snatchElement: ['h1', 'div#abstand_links > strong', 'div#abstand_links > div > a > img.foto', 'div#abstand_links > p', 'div.film_box'],
				//snatchElement: 'div#abstand_links p, div#abstand_links div:lt(2), div#abstand_links p, div.film_box',   :lt(2) geht nicht.
				duration: 65000 // 65 Sekunden
			},
      {
				// Wochenprogramm - diese Woche
        url: 'http://www.kurbel-karlsruhe.de/index.php?knr=197&show=week&week=0&firstday=do',
        snatchElement: ['h1', 'h3', 'h3 ~ div.film_box'], // zuerst h3 .. dann alle div.film_box, welche hierarchisch parallel nach h3 folgen.
        duration: 45000
      },
      {
        // Wochenprogramm - nächste Woche
        url: 'http://www.kurbel-karlsruhe.de/index.php?knr=197&show=week&week=1&firstday=do',
        snatchElement: ['h1', 'h3', 'h3 ~ div.film_box'], // class "film_box"
        duration: 45000
      },
      {
				// Sonderveranstaltungen > Indoor Open Air
				url: 'http://kurbel-karlsruhe.de/index.php?show=week&targetkino=staticseite&US=3611',
				snatchElement: ['h1', 'div#abstand_links div:nth-child(1)', 'div#abstand_links div:nth-child(2)'], // nur die ersten zwei Divs. - also nur der erste Block mit Bild.
				duration: 20000
      }

			]
  },
  facts: {
    duration: 5000,
    factList: [
      '**Markdown Text _works_ lets** see :) ',
      'aaaa',
      'bbbb ;-)',
      'ccc 8-)',
      'dd',
      'e',

      'r'
      ]

  },
  admin: {
    enableAPI: e.ADMIN_USER && e.ADMIN_PASSWORD,
    username: e.ADMIN_USER,
    password: e.ADMIN_PASSWORD,
    blocked: e.BLOCKED_USERS ? e.BLOCKED_USERS.split(',') : [],
    blockRetweets: true,
    blockPossiblySensitive: true
  },
  sponsors: [{
    image: 'https://conc.at/images/logos/zalando@2x.png',
    name: 'Zalando Technology',
    duration: 20000
  }, {
    image: 'https://conc.at/images/logos/pusher@2x.png',
    name: 'Pusher',
    duration: 20000
  }, {
    image: 'https://conc.at/images/logos/braintree@2x.png',
    name: 'Braintree Payments',
    duration: 10000
  }, {
    image: 'https://conc.at/images/logos/aws@2x.png',
    name: 'Amazon Web Services',
    duration: 10000
  }, {
    image: 'https://conc.at/images/logos/travis@2x.png',
    name: 'Travis CI',
    duration: 10000
  }, {
    image: 'https://conc.at/images/logos/hoodie@2x.png',
    name: 'Hoodie',
    duration: 10000
  }, {
    image: 'https://conc.at/images/logos/mandrill@2x.png',
    name: 'Mandrill',
    duration: 10000
  }, {
    image: 'https://conc.at/images/logos/gg@2x.png',
    name: 'gesagt.getan',
    duration: 10000
  }, {
    image: 'https://conc.at/images/logos/siili@2x.png',
    name: 'Siili',
    duration: 10000
  }, {
    image: 'https://conc.at/images/logos/diamonddogs@2x.png',
    name: 'the diamond:dogs|group',
    duration: 10000
  }, {
    image: 'https://conc.at/images/logos/codeschool@2x.png',
    name: 'codeschool',
    duration: 10000
  }, {
    image: 'https://conc.at/images/logos/transloadit@2x.png',
    name: 'Transloadit',
    duration: 10000
  }, {
    image: 'https://conc.at/images/logos/techtrrrs@2x.png',
    name: 'techtrrrs',
    duration: 10000
  }, {
    image: 'https://conc.at/images/logos/cws@2x.jpg',
    name: 'Coworking Salzburg',
    duration: 10000
  }, {
    image: 'https://conc.at/images/logos/fh@2x.jpg',
    name: 'University of Applied Sciences Salzburg',
    duration: 10000
  }]
}
