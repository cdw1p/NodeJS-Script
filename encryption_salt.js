const crypto = require('crypto');

function encrypt(data, password) {
  const algorithm = 'aes-256-ctr';
  const salt = crypto.randomBytes(16);
  const key = crypto.pbkdf2Sync(password, salt, 1000, 32, 'sha512');
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(data, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return {
    encrypted,
    algorithm,
    salt: salt.toString('hex'),
    iv: iv.toString('hex')
  }
}

function decrypt(encrypted, password, algorithm, salt, iv) {
  const key = crypto.pbkdf2Sync(password, Buffer.from(salt, 'hex'), 1000, 32, 'sha512');
  const decipher = crypto.createDecipheriv(algorithm, key, Buffer.from(iv, 'hex'));
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

module.exports = {
  encrypt,
  decrypt
};
