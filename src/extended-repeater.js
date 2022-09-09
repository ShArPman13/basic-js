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
  let strArray = [];
  let addArray = [];
  let addString = '';

  if (options.additionRepeatTimes > 1) {
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      if (options.hasOwnProperty('addition')) { addArray.push(options.addition + '') }
    }
    // if (options.addition === false) {
    //   addArray.push('false');
    // } else if (options.addition === null) {
    //   addArray.push('null');
    // } else addArray.push(options.addition);
    addString = options.additionSeparator ? addArray.join(`${options.additionSeparator}`) : addArray.join(`|`)
  } else {
    if (options.addition) {
      addString = options.addition
    } else addString = ''
  }
  if (options.repeatTimes) {
    for (let i = 0; i < options.repeatTimes; i++) {
      strArray.push(str);
    }
  } else return str + options.addition
  let strArrayPlusAdd = strArray.map(item => item + addString)
  let string = options.separator ? strArrayPlusAdd.join(`${options.separator}`) : strArrayPlusAdd.join(`+`)
  return string
}

module.exports = {
  repeater
};
