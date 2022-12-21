var crypto = require('crypto');

function encrypt(text) {
  return crypto.createHash('md5').update(text).digest('hex');
}

console.log(encrypt('password123')); // output: 5f4dcc3b5aa765d61d8327deb882cf99
