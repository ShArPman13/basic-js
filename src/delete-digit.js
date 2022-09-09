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
  let array = String(n).split('')
  let res = 0;
  for (let i = 0; i < array.length; i++) {
    let f = array.filter((__, index) => index !== i)
    let num = Number(f.join(''));
    res = num > res ? res = num : res
  }
  return res
}

module.exports = {
  deleteDigit
};
