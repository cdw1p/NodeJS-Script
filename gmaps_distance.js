const request = require('request');

// Replace YOUR_API_KEY with your Google Maps API key
const API_KEY = 'YOUR_API_KEY';

// Set the origin and destination locations
const origin = 'Seattle, WA';
const destination = 'San Francisco, CA';

// Set the API endpoint and parameters
const endpoint = 'https://maps.googleapis.com/maps/api/distancematrix/json';
const params = `?origins=${origin}&destinations=${destination}&key=${API_KEY}`;

// Make the API request
request(endpoint + params, (error, response, body) => {
  if (error) {
    console.log('Error:', error);
    return;
  }

  // Parse the response body
  const data = JSON.parse(body);

  // Print the distance
  console.log(`The distance between ${origin} and ${destination} is ${data.rows[0].elements[0].distance.text}.`);
});
