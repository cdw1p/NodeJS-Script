const sentiment = require('sentiment');

// Menganalisis sentiment dari string
const analysis = sentiment('I am very happy today');
console.log(analysis);
// Output: { score: 3, comparative: 0.75, tokens: [ 'happy' ], words: [ 'happy' ], positive: [ 'happy' ], negative: [] }

// Menganalisis sentiment dari array of strings
const analysis2 = sentiment(['I am very happy today', 'I am very unhappy today']);
console.log(analysis2);
// Output: { score: 0, comparative: 0, tokens: [ 'happy', 'unhappy' ], words: [ 'happy', 'unhappy' ], positive: [ 'happy' ], negative: [ 'unhappy' ] }
