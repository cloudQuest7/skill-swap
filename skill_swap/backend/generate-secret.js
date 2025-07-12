const crypto = require('crypto');

// Generate a secure random string
const secret = crypto.randomBytes(32).toString('hex');

console.log('Generated JWT Secret:');
console.log(secret);

// Copy this to your .env file as:
console.log('\nAdd this to your .env file:');
console.log(`JWT_SECRET=${secret}`);
