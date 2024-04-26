class CaesarCipher {
    constructor(shift) {
      this.shift = shift;
    }
    encode(text) {
      return text
        .split('')
        .map(char => {
          const code = char.charCodeAt(0);
          let shiftedCode = code;
          if (code >= 65 && code <= 90) {
            shiftedCode = ((code - 65 + this.shift) % 26) + 65;
          } else if (code >= 97 && code <= 122) {
            shiftedCode = ((code - 97 + this.shift) % 26) + 97;
          }
  
          return String.fromCharCode(shiftedCode);
        })
        .join('');
    }
    decode(text) {
      return this.encode(text);
    }
  }
  const c = new CaesarCipher(5);
  console.log(c.encode('Codewars')); 
  console.log(c.decode('BFKKQJX'));  
  