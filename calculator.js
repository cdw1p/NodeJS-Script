function calculate(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      throw new Error('Invalid operator');
  }
}

console.log(calculate(2, 3, '+'));  // prints 5
console.log(calculate(2, 3, '-'));  // prints -1
console.log(calculate(2, 3, '*'));  // prints 6
console.log(calculate(2, 3, '/'));  // prints 0.6666666666666666
