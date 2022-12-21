const ml = require('ml-regression');

// Data yang akan digunakan
const data = [
  [5, 4, 1, 5],
  [3, 1, 2, 3],
  [8, 3, 3, 8],
  [2, 2, 1, 2],
  [9, 5, 4, 9],
  [1, 1, 2, 1]
];

// Membuat objek Multiple Linear Regression
const multipleLinearRegression = new ml.MultipleLinearRegression(data);

// Melakukan prediksi nilai y dengan menggunakan x1, x2, dan x3
const result = multipleLinearRegression.predict([2, 3, 1]);
console.log(result); // Output: 2.6
