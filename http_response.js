var http = require('https');

var start = new Date().getTime();

http.get('https://www.example.com', function(res) {
  var end = new Date().getTime();
  console.log('Response time: ' + (end - start) + 'ms');
});
