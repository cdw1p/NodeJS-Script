const pos = require('pos');

const words = new pos.Lexer().lex('The quick brown fox jumps over the lazy dog.');
const taggedWords = new pos.Tagger().tag(words);

console.log(taggedWords);
// Output: [ [ 'The', 'DT' ],
//           [ 'quick', 'JJ' ],
//           [ 'brown', 'JJ' ],
//           [ 'fox', 'NN' ],
//           [ 'jumps', 'NNS' ],
//           [ 'over', 'IN' ],
//           [ 'the', 'DT' ],
//           [ 'lazy', 'JJ' ],
//           [ 'dog', 'NN' ],
//           [ '.', '.' ] ]
