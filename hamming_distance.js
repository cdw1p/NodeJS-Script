const hammingDistance = (string1, string2) => {
  let distance = 0;

  // Pastikan kedua string memiliki panjang yang sama
  if (string1.length !== string2.length) {
    return null;
  }

  for (let i = 0; i < string1.length; i++) {
    if (string1[i] !== string2[i]) {
      distance++;
    }
  }

  return distance;
}

const string1 = 'abcdef';
const string2 = 'abcdeg';

console.log(`Hamming distance: ${hammingDistance(string1, string2)}`);
