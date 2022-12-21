const fetch = require('node-fetch');

async function getData() {
  const response = await fetch('http://example.com/api/endpoint');
  const data = await response.json();
  console.log(data);
}

getData();
