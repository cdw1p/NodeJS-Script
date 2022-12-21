const fetch = require('node-fetch');

const options = {
  method: 'POST',
  body: JSON.stringify({
    key: 'value'
  }),
  headers: {
    'Content-Type': 'application/json'
  }
};

async function sendData() {
  const response = await fetch('http://example.com/api/endpoint', options);
  console.log(response.status);
}

sendData();
