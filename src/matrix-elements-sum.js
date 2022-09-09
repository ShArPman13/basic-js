const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let x = 0;
  let count = 0;
  matrix.forEach(item => {
    for (let j = x; j < item.length; j++) {
      if (item[j] === 0) {
        x = j + 1;
      } else count = count + item[j]
    }
  })
  return count
}

module.exports = {
  getMatrixElementsSum
};
