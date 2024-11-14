const crypto = require("crypto");

// Hashing a password with sha256 algorithm and base64 encoding
const hash256_1 = crypto.createHash("sha256").update("#NissanGTR35").digest("base64");
console.log("Hashed Password:", hash256_1);

// Hashing a password with sha256 algorithm and base64 encoding
const hash256_2 = crypto.createHash("sha256").update("#NissanGTR35").digest("hex");
console.log("Hashed Password:", hash256_2);

// Hashing a password with sha512 algorithm and base64 encoding
const hash512_1 = crypto.createHash("sha512").update("#NissanGTR35").digest("base64");
console.log("Hashed Password:", hash512_1);

// Hashing a password with sha512 algorithm and hex encoding
const hash512_2 = crypto.createHash("sha512").update("#NissanGTR35").digest("hex");
console.log("Hashed Password:", hash512_2);