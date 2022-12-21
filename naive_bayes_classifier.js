const fs = require('fs');

// read in data from csv file
let data = fs.readFileSync('./data.csv', 'utf8').split('\n');

// split each line into an array of values
data = data.map(line => line.split(','));

// create a mapping of unique class labels
let classLabels = new Set();
data.forEach(line => {
  classLabels.add(line[line.length - 1]);
});
classLabels = Array.from(classLabels);

// create a mapping of unique feature names
let featureNames = data[0].slice(0, -1);

// split data into training and test sets
let trainingData = [];
let testData = [];

for (let i = 1; i < data.length; i++) {
  if (i % 5 === 0) {
    testData.push(data[i]);
  } else {
    trainingData.push(data[i]);
  }
}

// create a function to calculate the probability of a given feature value given a class label
function featureProbabilityGivenClass(featureName, featureValue, classLabel) {
  let featureCountGivenClass = 0;
  let classCount = 0;
  trainingData.forEach(line => {
    if (line[line.length - 1] === classLabel) {
      classCount++;
      if (line[featureNames.indexOf(featureName)] === featureValue) {
        featureCountGivenClass++;
      }
    }
  });
  return featureCountGivenClass / classCount;
}

// create a function to calculate the probability of a given class label
function classProbability(classLabel) {
  let classCount = 0;
  trainingData.forEach(line => {
    if (line[line.length - 1] === classLabel) {
      classCount++;
    }
  });
  return classCount / trainingData.length;
}

// create a function to classify a given data point
function classify(dataPoint) {
  let probabilities = {};
  classLabels.forEach(classLabel => {
  probabilities[classLabel] = classProbability(classLabel);
    featureNames.forEach(featureName => {
      probabilities[classLabel] *= featureProbabilityGivenClass(featureName, dataPoint[featureNames.indexOf(featureName)], classLabel);
    });
  });
  let maxProbability = 0;
  let predictedClass = '';
  for (let classLabel in probabilities) {
    if (probabilities[classLabel] > maxProbability) {
    maxProbability = probabilities[classLabel];
    predictedClass = classLabel;
    }
  }
  return predictedClass;
}

// test the classifier on the test data
let correct = 0;
testData.forEach(dataPoint => {
  let prediction = classify(dataPoint);
  if (prediction === dataPoint[dataPoint.length - 1]) {
    correct++;
  }
});

console.log(Accuracy: ${correct / testData.length});
