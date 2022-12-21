const request = require('request');

// Ganti dengan token API Telegram yang Anda miliki
const TOKEN = 'YOUR_API_TOKEN';

// Ganti dengan ID chat atau username channel Telegram yang akan dituju
const CHAT_ID = 'CHAT_ID_OR_USERNAME';

// Ganti dengan pesan yang ingin dikirimkan
const MESSAGE = 'Pesan yang ingin dikirimkan';

const options = {
  url: `https://api.telegram.org/bot${TOKEN}/sendMessage`,
  form: {
    chat_id: CHAT_ID,
    text: MESSAGE
  }
};

request.post(options, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    console.log(response.statusCode);
  }
});
