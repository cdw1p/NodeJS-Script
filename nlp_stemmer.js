const natural = require('natural');

const text = "Ini adalah contoh teks yang akan ditokenisasi dan di-stemming.";

const tokenizer = new natural.WordTokenizer();
const tokens = tokenizer.tokenize(text);

const stemmer = natural.PorterStemmer;
const stemmedTokens = tokens.map(token => stemmer.stem(token));

console.log(stemmedTokens);  // ["Ini", "adalah", "contoh", "teks", "yang", "akan", "ditokenisasi", "dan", "di", "-", "stem"]
