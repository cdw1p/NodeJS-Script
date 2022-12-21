const twilio = require('twilio');

// Masukkan nomor telepon pengirim dan penerima
const from = '+1234567890';
const to = '+0987654321';

// Masukkan SID dan token akun Twilio Anda
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';

// Buat client Twilio
const client = new twilio(accountSid, authToken);

// Kirim pesan SMS
client.messages
  .create({
     body: 'Halo, ini adalah pesan SMS dari Twilio',
     from: from,
     to: to
   })
  .then(message => console.log(message.sid));
