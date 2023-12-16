const { NotImplementedError } = require('../extensions/index.js');
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
                   'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
                    'U', 'V', 'W', 'X', 'Y', 'Z'];

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(right) {
    if(right !== undefined) {
      this.right = right;
    } else {
      this.right = true;
    }
  }
  encrypt() {
    let encryptStr = '';
    if(arguments.length < 2 || arguments[0] === undefined || arguments[1] === undefined) {
      throw new Error('Incorrect arguments!');
    }
    let initStr = arguments[0].toUpperCase();
    let str = initStr.replace(/[.,\/#@|!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\d+/g,'').replaceAll(" ","").toUpperCase();
    let key = arguments[1].toUpperCase();
    if(str.length > key.length) {
      let wholeRep = Math.floor(str.length / key.length);
      key = key.repeat(wholeRep);
      let modRep = str.length % key.length;
      key = key + key.substring(0, modRep);
    }
    let j = 0;
    for(let i = 0; i < str.length; i++) {
      let indexStr = alphabet.indexOf(str[i]);
      let indexKey = alphabet.indexOf(key[i]);
      let indexInitStr = alphabet.indexOf(initStr[j]);
      while(indexInitStr === -1 && j < initStr.length) {
        encryptStr += initStr[j];
        j++;
        indexInitStr = alphabet.indexOf(initStr[j]);
      }
      let index = (indexStr + indexKey) % alphabet.length;
      encryptStr += alphabet[index];
      j++;
    }
    if(initStr.length > encryptStr.length){
      encryptStr += initStr.substring(encryptStr.length);
    }
    return this.right ? encryptStr : encryptStr.split('').reverse().join('');
  }
  decrypt() {
    let decryptStr = '';
    if(arguments.length < 2 || arguments[0] === undefined || arguments[1] === undefined) {
      throw new Error('Incorrect arguments!');
    }
    let initStr = arguments[0].toUpperCase();
    let str = initStr.replace(/[.,\/#@|!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\d+/g,'').replaceAll(" ","").toUpperCase();
    let key = arguments[1].toUpperCase();
    if(str.length > key.length) {
      let wholeRep = Math.floor(str.length / key.length);
      key = key.repeat(wholeRep);
      let modRep = str.length % key.length;
      key = key + key.substring(0, modRep);
    }
    let j = 0;
    for(let i = 0; i < str.length; i++) {
      let indexStr = alphabet.indexOf(str[i]);
      let indexKey = alphabet.indexOf(key[i]);
      let indexInitStr = alphabet.indexOf(initStr[j]);
      while(indexInitStr === -1 && j < initStr.length) {
        decryptStr += initStr[j];
        j++;
        indexInitStr = alphabet.indexOf(initStr[j]);
      }
      let index;
      if(indexStr >= indexKey) {
        index = (indexStr - indexKey) % alphabet.length;
      } else {
        index = (indexStr - indexKey + alphabet.length) % alphabet.length;
      }
      decryptStr += alphabet[index];
      j++;
    }
    if(initStr.length > decryptStr.length){
      decryptStr += initStr.substring(decryptStr.length);
    }
    return this.right ? decryptStr : decryptStr.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
