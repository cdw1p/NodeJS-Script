const fs = require('fs');

function getData(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

function parseData(data) {
  return data.split('\n').map(d => d.split(','));
}

function getCriteria(data) {
  return data[0];
}

function getOptions(data) {
  return data.slice(1);
}

function getWeights(criteria) {
  return criteria.map(c => parseInt(c.split(':')[1]));
}

function getRatings(options) {
  return options.map(o => o.slice(1));
}

function calculateTotalScore(ratings, weights) {
  return ratings.map(r => r.reduce((total, rating, i) => total + (rating * weights[i]), 0));
}

function getBestOption(totals) {
  return totals.indexOf(Math.max(...totals));
}

async function main() {
  try {
    const data = await getData('data.txt');
    const parsedData = parseData(data);
    const criteria = getCriteria(parsedData);
    const options = getOptions(parsedData);
    const weights = getWeights(criteria);
    const ratings = getRatings(options);
    const totals = calculateTotalScore(ratings, weights);
    const bestOption = getBestOption(totals);
    console.log(`The best option is: ${options[bestOption][0]} with a total score of ${totals[bestOption]}`);
  } catch (err) {
    console.log(err);
  }
}

main();
