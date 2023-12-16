const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if(!str) {
    return str;
  }
  let newStr = '';
  let letter = str[0];
  let count = 1;
  for(let i = 1; i < str.length; i++) {
    if(letter === str[i]) {
      count++;
    } else {
      if(count === 1) {
        newStr += letter;
      } else {
        newStr += count + letter;
      }
      letter = str[i];
      count = 1;
    }
  }
  newStr += (count === 1) ? letter : (count + letter);
  return newStr;
}

module.exports = {
  encodeLine
};
