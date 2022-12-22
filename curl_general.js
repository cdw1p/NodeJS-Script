const curl = require('node-libcurl').Curl;

let url = 'https://www.example.com';
let postData = 'username=john&password=doe';

let curlObject = new curl();

curlObject.setOpt(curl.option.URL, url);
curlObject.setOpt(curl.option.POSTFIELDS, postData);
curlObject.on('end', function(statusCode, body, headers) {
  console.log(statusCode);
  console.log(body);
  console.log(headers);
  this.close();
});

curlObject.on('error', function(error, errorCode) {
  console.log(error);
  console.log(errorCode);
  this.close();
});

curlObject.perform();
