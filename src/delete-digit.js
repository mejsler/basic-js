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
const deleteDigit = (n) => {
  const numArr = String(n).split('');
  const result = [];
  for (let i = 0; i < numArr.length; i++) {
    result.push(
      +numArr
        .slice(0, i)
        .concat(numArr.slice(i + 1))
        .join('')
    );
  }
  return Math.max(...result);
};

module.exports = {
  deleteDigit,
};
