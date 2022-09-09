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
  if (typeof members !== 'string' && !Array.isArray(members)) { return false }
  //оставляем в массиве только строки
  const onlyStringMembersFirstLetter = members.filter(item => typeof item === 'string');
  //убираем из строчных элементов массива пробелы
  const noSpace = onlyStringMembersFirstLetter.map(item => item.replace(/ /g, ''))
  //сортируем буквы в алфавитном порядке
  const firstLetter = noSpace.map(item => item[0].toUpperCase()).sort((a, b) => {
    return a.localeCompare(b);
  })
  //получаем строку - результат
  const result = firstLetter.join('')
  return result;
}

module.exports = {
  createDreamTeam
};
