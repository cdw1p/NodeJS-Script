const axios = require('axios');

const API_KEY = 'YOUR_API_KEY_HERE';

async function geocode(address) {
  try {
    const response = await axios.get(https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${API_KEY});
    const data = response.data;
    if (data.status === 'OK') {
      return data.results[0].geometry.location;
    } else {
      throw new Error(data.status);
    }
  } catch (error) {
    console.error(error);
  }
}

geocode('New York, NY').then(result => console.log(result));
