const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let newNames = [];
  for(let i = 0; i < names.length; i++) {
    if(newNames.includes(names[i])) {
      let count = 0;
      for(let j = 0; j < i; j++) {
        if(names[i] === names[j]) {
          count++;
        }
      }
      if(count === 0) {
          newNames.push(names[i]+'(' + (count + 1) + ')');
      }
      else if(count === 1) {
        newNames.push(names[i]+'(' + (count) + ')');
      } else {
        newNames.push(names[i] +'(' + (count) + ')');
      }
      console.log()
    } else {
      newNames.push(names[i]);
    }
  }
  return newNames;
}

module.exports = {
  renameFiles
};
