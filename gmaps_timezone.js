const express = require('express');
const request = require('request');
const moment = require('moment-timezone');
const app = express();

app.get('/timezone/:lat/:lng', (req, res) => {
  const lat = req.params.lat;
  const lng = req.params.lng;
  const apiKey = 'YOUR_GMAPS_API_KEY';
  const url = https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lng}&timestamp=${Math.floor(Date.now() / 1000)}&key=${apiKey};
  request(url, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const data = JSON.parse(body);
      const timezone = data.timeZoneId;
      const currentTime = moment().tz(timezone).format('dddd, MMMM Do YYYY, h:mm:ss a');
      res.send(The current time in ${timezone} is ${currentTime});
    } else {
      res.send('Error getting timezone information from Google Maps API');
    }
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
