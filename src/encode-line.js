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
  if (str === '') { return '' }
  let array = [];
  let res = '';
  for (let i = 0; i < str.length; i++) {
    let count = 1
    while (str[i] === str[i + 1]) {
      count = count + 1;
      i++
    }
    array.push([count === 1 ? '' : count, str[i]].join(''))
    res = array.join('')
  }
  return res
}

module.exports = {
  encodeLine
};
