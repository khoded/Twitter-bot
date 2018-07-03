var Twit = require('twit');
var request = require('request');
var T = new Twit({
  consumer_key:         'zRu5vDUFbSsKRjdyQDWbTHhiU',
  consumer_secret:      'pL8CcMIzR5bzrCMlUSugDVhFj3IrU9Uz0lSYbeWCtnQg75cW36',
  access_token:         '552107287-jahMDvEl5YhwUUMlD3HzvO3xzm4gpgrzXOpwvhGl',
  access_token_secret:  '	S2m37q5p58bl9KPfm4sVxfrzZu6wyPgVYgUv4GI8JQym8
'
})
const url ="https://api.forismatic.com/api/1.0/?method=getQuote&key=123456&format=text&lang=en"

function getQuote (callback) {
	request(url, function (error, response, body) {
	  console.log('error:', error); // Print the error if one occurred
	  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
	  console.log('body:', body);
	  callback(body);
	});
}
function postTweet(tweet) {
	console.log(tweet);
	T.post('statuses/update', { status: tweet }, function(err, data, response) {
	  console.log(data);
	})
}
getQuote(postTweet)
