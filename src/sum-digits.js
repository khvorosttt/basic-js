const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let nStr = String(n);
  if(nStr.length === 1) {
    return n;
  }
  let sumDigit = 0;
  for(let i = 0; i < nStr.length; i++) {
    sumDigit += parseInt(nStr[i]);
  }
  return getSumOfDigits(sumDigit);
}

module.exports = {
  getSumOfDigits
};
