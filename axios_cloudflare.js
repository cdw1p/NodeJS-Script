const axios = require('axios');
const cloudscraper = require('cloudscraper');

const options = {
  method: 'GET',
  url: 'https://www.example.com',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36'
  }
};

cloudscraper.request(options, function(error, response, body) {
  if (error) {
    console.log(error);
  } else {
    console.log(body);
  }
});
