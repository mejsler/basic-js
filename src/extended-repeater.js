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
function repeater(str, objOptions) {
  let add = '';
  let addSep = '|';
  let sep = '+';
  let keksep = 0;
  let rep = 1;
  let repAdd = 1;
  const objArr = Object.entries(objOptions);
  for (let [key, value] of objArr) {
  key === 'addition' 
  ? add = value
  : key === 'separator'
  ? sep = value
  : key === 'additionSeparator'
  ? addSep = value
  : key === 'repeatTimes'
  ? rep = value
  : key === 'additionRepeatTimes'
  ? repAdd = value
  : 0
} 
  for (let key of objArr) {
  key === 'additionSeparator'
  ? keksep++
  : 0
} 
  return (str + (add + keksep != 0 ? addSep : '').repeat(repAdd) + sep).repeat(rep - 1) + (str + (add + (repAdd > 1 ? addSep : '')).repeat(repAdd - 1) + add)
}


module.exports = {
  repeater
};
