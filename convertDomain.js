const punycode = require('punycode');

const unicodeDomain = 'www.เบเกอรี่.com';
const punycodeDomain = punycode.toASCII(unicodeDomain);

console.log(punycodeDomain); // Outputs: www.xn--12c3c2a2b2b9cb2e.com
