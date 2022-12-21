var request = require('request');
var cheerio = require('cheerio');

var url = 'http://www.example.com';

request(url, function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    var hasilScrape = $('.title').text();
    console.log(hasilScrape);
  }
});
