const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {

  chain: [],

  getLength() {
    return this.chain.length
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    let arrayOfIndex = [];
    for (let i = 1; i < this.chain.length; i++) { arrayOfIndex.push(i) }
    if (arrayOfIndex.indexOf(position) === -1) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!")
    } else {
      this.chain.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this
  },
  finishChain() {
    let finChain = this.chain.join('~~');
    this.chain = [];
    return finChain
  }
};

module.exports = {
  chainMaker
};
