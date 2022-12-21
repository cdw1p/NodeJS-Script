const natural = require('natural');

const text = "Ini adalah contoh teks yang akan ditokenisasi.";

const tokenizer = new natural.WordTokenizer();
const tokens = tokenizer.tokenize(text);

console.log(tokens);  // ["Ini", "adalah", "contoh", "teks", "yang", "akan", "ditokenisasi"]
