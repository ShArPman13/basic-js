const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {

  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    switch (true) {

      case arr[i] === "--discard-next":
        if (i === arr.length - 1) break;
        i++;
        break;

      case arr[i] === "--discard-prev":
        if (newArr.length === 0 || !newArr.includes(arr[i - 1])) break;
        newArr.pop();
        break;

      case arr[i] === "--double-next":
        if (i === arr.length - 1) break;
        newArr.push(arr[i + 1]); break;

      case arr[i] === "--double-prev":
        if (newArr.length === 0 || !newArr.includes(arr[i - 1])) break;
        newArr.push(newArr[newArr.length - 1]); break;
      default: newArr.push(arr[i]);
    }
  }
  return newArr;
}
module.exports = {
  transform
};
