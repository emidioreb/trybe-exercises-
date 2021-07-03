
const assert = require('assert');
/* 1 - Dada uma matriz, transforme em um array. */
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = arrays.reduce((accumulator,currentValue) => {
  return accumulator.concat(currentValue)
  })
console.log(flatten);

assert.deepStrictEqual(flatten, ['1', '2', '3', true, 4, 5, 6]);
