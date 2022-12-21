const https = require('https');

const checkWebsite = (url) => {
  https.get(url, (res) => {
    console.log(`Status Code: ${res.statusCode}`);
    if (res.statusCode === 200) {
      console.log(`${url} is up and running.`);
    } else {
      console.log(`${url} is down.`);
    }
  }).on('error', (err) => {
    console.log(`There was an error: ${err.message}`);
  });
};

checkWebsite('https://www.example.com');
