<p align="center">
  <img src="https://rawgit.com/conc-at/twitterwall/master/app/images/concat.svg" alt=".concat() Logo">
</p>
<h1 align="center">.concat() 2015 Twitterwall</h1>

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)
[![Travis](https://img.shields.io/travis/conc-at/twitterwall.svg?style=flat)](https://travis-ci.org/conc-at/twitterwall)

## Configure Twitterwall

    Copy the env.sample to a file called '.env'. It's a hidden file, thus the dot in the name.
    It looks like this:

```
{
  "title": "My Twitterwall",
  "debug": "http,worker,twitterwall",
  "port": "8000",
  "access": {
    "token": "<your twitter access token>",
    "token_secret": "<your twitter token secret>"
  },
  "consumer": {
    "key": "<your twitter consumer key>",
    "secret": "<your twitter consumer secret>"
  },
  "lanyrd": {
    "year": "2015",
    "gid": "concat"
  },
  "hashtag": "#concat",
  "hashtags": "#concat,#anotherhashtag,#anotherone"
}

```

## Run Twitterwall

    $ npm install && npm start


## License

The [MIT License (MIT)](http://opensource.org/licenses/MIT)

Copyright © 2015 [Stephan Bönnemann](https://twitter.com/boennemann) & [Christoph Witzko](https://twitter.com/christophwitzko)
Some parts copyrighted © 2015 Paul-Dieter Klumpp
