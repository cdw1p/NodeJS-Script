const rupiahRegex = /^[0-9]{1,3}(?:[0-9](?:[.,][0-9]{2})?|(?:,[0-9]{3})(?:.[0-9]{2})?|(?:.[0-9]{3})*(?:,[0-9]{2})?)$/;

function isRupiah(input) {
  return rupiahRegex.test(input);
}

console.log(isRupiah("1.000")); // true
console.log(isRupiah("1,000")); // true
console.log(isRupiah("1.000,00")); // true
console.log(isRupiah("100000")); // true
console.log(isRupiah("100,000.00")); // true
console.log(isRupiah("1,000,000.00")); // true
console.log(isRupiah("1,000,000,000.00")); // true
console.log(isRupiah("1.000.000")); // false
console.log(isRupiah("1,000.000")); // false
console.log(isRupiah("1,000,000.000")); // false
console.log(isRupiah("1,000,000,000.000")); // false
