const tf = require('@tensorflow/tfjs');

// Fungsi yang akan kita optimalkan (misalnya fungsi kuadrat y = x^2)
const y = x => x.square();

// Membuat model yang terdiri dari satu layer dengan satu unit
const model = tf.sequential();
model.add(tf.layers.dense({units: 1, inputShape: [1]}));

// Compile model dengan optimizer gradient descent dan loss mean squared error
model.compile({optimizer: 'sgd', loss: 'meanSquaredError'});

// Data latih yang terdiri dari nilai x dan nilai y (x^2)
const xs = tf.tensor1d([-1, 0, 1, 2, 3, 4]);
const ys = y(xs);

// Latih model dengan data latih
model.fit(xs, ys, {epochs: 10}).then(() => {
  // Setelah model terlatih, gunakan model untuk memprediksi nilai y untuk x = 5
  model.predict(tf.tensor2d([5], [1, 1])).print();
});
