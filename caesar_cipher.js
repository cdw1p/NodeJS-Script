const caesarCipher = (str, shift) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const alphabetLength = alphabet.length;
  let result = '';

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let index = alphabet.indexOf(char.toLowerCase());

    if (index === -1) {
      result += char;
      continue;
    }

    let newIndex = (index + shift) % alphabetLength;

    if (newIndex < 0) {
      newIndex = alphabetLength + newIndex;
    }

    if (char === char.toUpperCase()) {
      result += alphabet[newIndex].toUpperCase();
    } else {
      result += alphabet[newIndex];
    }
  }

  return result;
};

console.log(caesarCipher('Hello, World!', 3)); // Khoor, Zruog!
