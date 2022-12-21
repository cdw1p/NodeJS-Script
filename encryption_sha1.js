const crypto = require('crypto');

const data = 'my data';

const hash = crypto.createHash('sha1').update(data).digest('hex');

console.log(hash);
