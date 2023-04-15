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
const transform = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const result = [];
  const newArr = arr.map((e, i) =>
    typeof e === 'string' && e.match(/^(--discard|--double)/)
      ? (i + e.split('').splice('1').join('')).split('-')
      : e
  );
  newArr.map((e, i) => {
    if (!Array.isArray(e)) {
      if (
        Array.isArray(newArr[i - 1]) &&
        Array.isArray(newArr[i + 1]) &&
        newArr[i - 1][1] !== 'double'
      ) {
        newArr.splice(i, 1);
      } else {
        result.push(e);
      }
    } else {
      if (e[1] === 'double') {
        e[2] === 'next' && arr[i + 1]
          ? result.push(arr[i + 1])
          : e[2] === 'prev' && arr[i - 1]
          ? result.push(arr[i - 1])
          : 0;
      } else {
        e[2] === 'next' && arr[i + 1]
          ? result.splice(i, 1)
          : e[2] === 'prev' && arr[i - 1]
          ? result.splice(i - 1, 1)
          : 0;
      }
    }
  });
  return result;
};

module.exports = {
  transform,
};
