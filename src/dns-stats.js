const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let domainDecomposition = [];
  let temp = [];
  let domainsObj = {};
  for(let i = 0; i < domains.length; i++) {
    domainDecomposition = domains[i].split('.');
    let tempDomain = '';
    for(let j = domainDecomposition.length - 1; j >= 0; j--) {
      tempDomain += '.' + domainDecomposition[j];
      temp.push(tempDomain);
    }
  }
  for(let i = 0; i < temp.length; i++) {
    if(!domainsObj.hasOwnProperty(temp[i])) {
      let count = 0;
      for(let j = i; j < temp.length; j++) {
        if(temp[i] === temp[j]) {
          count++;
        }
      }
      domainsObj[temp[i]] = count;
    }
  }
  return domainsObj;
}

module.exports = {
  getDNSStats
};
