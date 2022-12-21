const request = require('request');

const options = {
  url: 'https://example.com',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36',
    'Cookie': '__cfduid=d84b3a892bea6d58aa9b5f6bfea6b5d6b1623187052; cf_clearance=79de9c9ac9fcad86a5fd92e1a4d1c3e4f6b2a897-1623187106-0-250',
  },
  gzip: true,
};

request(options, function(error, response, body) {
  if (error) {
    console.error(error);
  } else {
    console.log(body);
  }
});
