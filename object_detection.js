const tf = require('@tensorflow/tfjs');
const cocoSsd = require('@tensorflow-models/coco-ssd');

// Load model MobileNet
const model = await cocoSsd.load();

// Read image file
const image = await tf.node.decodeImage('./image.jpg');

// Run object detection on the image
const predictions = await model.detect(image);

console.log(predictions);
