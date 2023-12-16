const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let digit = 0;
  let digitStr = n.toString();
  let tempDigitStr = '';
  let number;
  for(let i = 0; i < digitStr.length; i++) {
    if(i === 0) {
      tempDigitStr = digitStr.substring(i+1);
    } else if(i === digitStr.length - 1) {
      tempDigitStr = digitStr.substring(0, i);
    } else {
      tempDigitStr = digitStr.substring(0, i) + digitStr.substring(i+1);
    }
    number = parseInt(tempDigitStr);
    digit = digit < number ? number : digit;
  }
  return digit;
}

module.exports = {
  deleteDigit
};
