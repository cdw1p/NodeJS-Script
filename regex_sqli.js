let input = "SELECT * FROM users WHERE username='admin' OR 1=1; --"
let regex = /(^|\s)(select|update|delete|insert|drop)(\s|$)/i

if (input.match(regex)) {
console.log("Possible SQL injection detected!")
} else {
console.log("No SQL injection detected.")
}

// Output: "Possible SQL injection detected!"
