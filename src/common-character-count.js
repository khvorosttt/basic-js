const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let common = 0;
  let commonCharacter = [];
  let minStr;
  let maxStr;
  if(s1.length < s2.length) {
    minStr = s1;
    maxStr = s2;
  } else {
    minStr = s2;
    maxStr = s1;
  }
  for(let i = 0; i < minStr.length; i++) {
    if(!commonCharacter.includes(minStr[i])) {
      let countMinStr = minStr.split(minStr[i]).length - 1;
      let countMaxStr = maxStr.split(minStr[i]).length - 1;
      if(countMinStr > 0 && countMaxStr > 0) {
        commonCharacter.push(minStr[i]);
        common += Math.min(countMinStr, countMaxStr);
      }
    }  
  }
  return common;
}

module.exports = {
  getCommonCharacterCount
};
