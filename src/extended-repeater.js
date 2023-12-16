const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  options.repeatTimes = options.repeatTimes || 1;
  options.separator = options.separator || '+';
  options.additionRepeatTimes = options.additionRepeatTimes || 1;
  options.additionSeparator = options.additionSeparator || '|';
  if(String(options.addition)) {
    let strAdd;
    if(options.addition !== undefined) {
      strAdd = _repeat(String(options.addition), options.additionRepeatTimes, options.additionSeparator);
    } else {
      strAdd = _repeat(options.addition, options.additionRepeatTimes, options.additionSeparator);
    }
    return _repeat(str + strAdd, options.repeatTimes, options.separator);
  } else {
    return _repeat(str, options.repeatTimes, options.separator);
  }
}

function _repeat(str, times, separator) {
  let repeatStr = [];
  for(let i = 0; i < times; i++) {
    repeatStr.push(str);
  }
  return repeatStr.join(separator);
}

module.exports = {
  repeater
};
