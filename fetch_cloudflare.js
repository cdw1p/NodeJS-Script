const cloudscraper = require('cloudscraper');
const fetch = require('node-fetch');

cloudscraper.get('https://example.com', (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    fetch('https://example.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data: 'some data'
      })
    })
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(error => console.error(error));
  }
});
