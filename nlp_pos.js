const natural = require('natural');
const posTagger = new natural.BrillPOSTagger();

// Contoh teks yang akan di-tag
const text = "The quick brown fox jumps over the lazy dog.";

// Lakukan POS tagging
const taggedWords = posTagger.tag(text.split(' '));
console.log(taggedWords);
