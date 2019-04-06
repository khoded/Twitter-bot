var Twit = require('twit');
var T = new Twit({
  consumer_key:         'zRu5vDUFbSsKRjdyQDWbTHhiU',
  consumer_secret:      'pL8CcMIzR5bzrCMlUSugDVhFj3IrU9Uz0lSYbeWCtnQg75cW36',
  access_token:         '552107287-jahMDvEl5YhwUUMlD3HzvO3xzm4gpgrzXOpwvhGl',
  access_token_secret:  'S2m37q5p58bl9KPfm4sVxfrzZu6wyPgVYgUv4GI8JQym8'
})


var stream = T.stream('statuses/sample',{ track: '#code' } )
 
stream.on('tweet', function (tweet) {
  console.log(tweet.text)
});
