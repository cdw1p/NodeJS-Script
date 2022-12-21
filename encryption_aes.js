const crypto = require('crypto');

// Ganti dengan kunci enkripsi yang ingin Anda gunakan
const key = 'YOUR_ENCRYPTION_KEY';

// Ganti dengan pesan yang ingin dienkripsi
const message = 'Pesan yang ingin dienkripsi';

const iv = crypto.randomBytes(16);
const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);

let encrypted = cipher.update(message, 'utf8', 'hex');
encrypted += cipher.final('hex');

console.log(`Hasil enkripsi: ${encrypted}`);
