const crypto = require('crypto');

const stringToEncrypt = 'Hello, World!';
const encryptedString = crypto.createHash('sha256').update(stringToEncrypt).digest('hex');

console.log(encryptedString);
