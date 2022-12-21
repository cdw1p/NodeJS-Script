const crypto = require('crypto');

const data = 'my data';
const key = 'my secret key';

const hmac = crypto.createHmac('sha1', key).update(data).digest('hex');

console.log(hmac);
