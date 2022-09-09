const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {

  constructor(method = 'true') {
    this.type = method;
  }
  encrypt(message, key) {

    let alph = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    if (!message || !key) { throw new Error('Incorrect arguments!') }

    let keyOk = key;

    if (keyOk.length !== message.length) { // make key in to necessary length
      while (keyOk.length < message.length) {
        keyOk = keyOk + key
      }
      keyOk = keyOk.slice(0, message.length)
    }
    let res = [];
    let j = 0;

    for (let i = 0; i < message.length; i++) {
      message = message.toUpperCase();
      keyOk = keyOk.toUpperCase();

      if (alph.includes(message[i])) {
        let key = (alph.indexOf(message[i]) + alph.indexOf(keyOk[j])) % 26;
        res.push(alph[key])
        j = j + 1
      } else {
        res.push(message[i])
      }

    }

    return this.type ? res.join('') : res.reverse().join('');
  }

  decrypt(message, key) {
    if (!message || !key) { throw new Error('Incorrect arguments!') }

    let alph = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let keyOk = key;

    if (keyOk.length !== message.length) { // make key in to necessary length
      while (keyOk.length < message.length) {
        keyOk = keyOk + key
      }
      keyOk = keyOk.slice(0, message.length)
    }
    let res = [];
    let j = 0;

    for (let i = 0; i < message.length; i++) {
      message = message.toUpperCase();
      keyOk = keyOk.toUpperCase();

      if (alph.includes(message[i])) {
        let key = (alph.indexOf(message[i]) - alph.indexOf(keyOk[j]) + 26) % 26;

        res.push(alph[key])
        j = j + 1
      } else {
        res.push(message[i])
      }
    }

    return this.type ? res.join('') : res.reverse().join('');
  }
}


module.exports = {
  VigenereCipheringMachine
};
