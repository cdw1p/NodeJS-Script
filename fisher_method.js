const fisherMethod = (data1, data2) => {
  const mean1 = calculateMean(data1);
  const mean2 = calculateMean(data2);
  const stdDev1 = calculateStandardDeviation(data1);
  const stdDev2 = calculateStandardDeviation(data2);
  const n1 = data1.length;
  const n2 = data2.length;
  const fValue = (mean1 - mean2) / Math.sqrt((stdDev1 ** 2 / n1) + (stdDev2 ** 2 / n2));
  return fValue;
};

const calculateMean = (data) => {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i];
  }
  return sum / data.length;
};

const calculateStandardDeviation = (data) => {
  const mean = calculateMean(data);
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += (data[i] - mean) ** 2;
  }
  return Math.sqrt(sum / data.length);
};

console.log(fisherMethod([1,2,3,4,5], [6,7,8,9,10])); // expected output: -1.732
