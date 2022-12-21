const cv = require('opencv4nodejs');

// Load Haar cascade classifier
const classifier = new cv.CascadeClassifier('./haarcascade_frontalface_default.xml');

// Read image file
const image = cv.imread('./image.jpg');

// Run object detection on the image
const faces = classifier.detectMultiScale(image).objects;

console.log(faces);
