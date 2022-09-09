const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let lineOne = [];
  let lineTwo = [];
  let lineThree = [];

  const copyMatrix = JSON.parse(JSON.stringify(matrix));

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      matrix[i][j] === true ? copyMatrix[i][j] = true : copyMatrix[i][j] = 1;
    }
  }

  let res = [];

  for (let i = 1; i < matrix.length; i++) {
    lineOne = copyMatrix[i - 1]
    lineTwo = copyMatrix[i]
    if (matrix.length === 3) {
      lineThree = copyMatrix[i + 1]
    }




    for (let j = 0; j < 3; j++) {
      if (lineOne[j] === true) {
        lineOne[j] = 1
        lineTwo[j] = +lineTwo[j] + 1

        if (j > 0) {
          lineOne[j - 1] = lineOne[j - 1] !== true ? +lineOne[j - 1] + 1 : 1
          lineTwo[j - 1] = lineTwo[j - 1] !== true ? +lineTwo[j - 1] + 1 : 1
        }

        if (j < 2) {
          lineOne[j + 1] = lineOne[j + 1] !== true ? +lineOne[j + 1] + 1 : 1
          lineTwo[j + 1] = lineTwo[j + 1] !== true ? +lineTwo[j + 1] + 1 : 1
        }
      }

      if (lineTwo[j] === true) {
        lineTwo[j] = 1
        lineOne[j] = +lineOne[j] + 1
        lineThree[j] = +lineThree[j] + 1

        if (j > 0) {
          lineTwo[j - 1] = lineTwo[j - 1] !== true ? +lineTwo[j - 1] + 1 : 1
          lineOne[j - 1] = lineOne[j - 1] !== true ? +lineOne[j - 1] + 1 : 1
          lineThree[j - 1] = lineThree[j - 1] !== true ? +lineThree[j - 1] + 1 : 1
        }

        if (j < 3) {
          lineOne[j + 1] = lineOne[j + 1] !== true ? +lineOne[j + 1] + 1 : 1
          lineTwo[j + 1] = lineTwo[j + 1] !== true ? +lineTwo[j + 1] + 1 : 1
          lineThree[j + 1] = lineThree[j + 1] !== true ? +lineThree[j + 1] + 1 : 1
        }
      }
      if (lineThree[j] === true) {
        lineThree[j] = 1
        lineTwo[j] = +lineTwo[j] + 1

        if (j > 0) {
          lineTwo[j - 1] = lineTwo[j - 1] !== true ? +lineTwo[j - 1] + 1 : 1
          lineThree[j - 1] = lineThree[j - 1] !== true ? +lineThree[j - 1] + 1 : 1
        }

        if (j < 3) {
          lineTwo[j + 1] = lineTwo[j + 1] !== true ? +lineTwo[j + 1] + 1 : 1
          lineThree[j + 1] = lineThree[j + 1] !== true ? +lineThree[j + 1] + 1 : 1
        }
      }

    }
    i = i + 2;

    lineOne.filter(item => item > 1).length === 0 ? res.push([0, 0, 0]) : res.push(lineOne);
    lineTwo.filter(item => item > 1).length === 0 ? res.push([0, 0, 0]) : res.push(lineTwo);

    res.push(lineThree);

  }
  return res.filter(item => item.length > 0)

}

module.exports = {
  minesweeper
};
