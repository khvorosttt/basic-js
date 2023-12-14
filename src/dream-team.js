const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let team = [];
  if(!members || !members.length) {
    return false;
  }
  for(let member of members) {
    if(typeof(member) === "string") {
      team.push(member.trim().toUpperCase().charAt(0));
    }
  }
  if(!team.length) {
      return false;
  }
  for(let i = 0; i < team.length; i++) {
    let min = team[i].charCodeAt(0);
    let indexMin = i;
    for(let j = i; j < team.length; j++) {
      let codeNumber = team[j].charCodeAt(0);
      if(min > codeNumber) {
        min = codeNumber;
        indexMin = j;
      }
    }
    let temp = team[i];
    team[i] = team[indexMin];
    team[indexMin] = temp;
  }
  return team.join('');
}

module.exports = {
  createDreamTeam
};
