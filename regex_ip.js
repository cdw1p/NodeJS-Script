const ipRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

const checkIpAddress = (ip) => {
  return ipRegex.test(ip);
}

console.log(checkIpAddress("192.168.0.1")); // true
console.log(checkIpAddress("255.255.255.255")); // true
console.log(checkIpAddress("172.16.0.1")); // true
console.log(checkIpAddress("invalid")); // false
console.log(checkIpAddress("172.16.255.256")); // false
