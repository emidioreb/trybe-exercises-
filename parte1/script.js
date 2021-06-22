// // // //questão 1
// // // const assert = require('assert');

// // // function sum(a, b) {
// // //   if (typeof a !== 'number' || typeof b !== 'number') {
// // //     throw new Error('parameters must be numbers');
// // //   }

// // //   return a + b;
// // // }
// // // //Teste se o retorno de sum(4, 5) é 9
// // // assert.strictEqual(sum(4,5),9,'quatro mais cinco é igual nove')
// // // //Teste se o retorno de sum(0, 0) é 0
// // // assert.strictEqual(sum(0,0),0,'zero mais zero é igual zero')
// // // //Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
// // // assert.strictEqual(sum(4,'5'),0,'zero mais zero é igual zero')

// // // -------------------------------------------------------------------------------------------------

// // //questão 2
// // // const assert = require('assert');

// // // const myRemove = (arr, item) => {
// // //   let newArr = [];
// // //   for (let index = 0; index < arr.length; index += 1) {
// // //     if (item !== arr[index]) {
// // //       newArr.push(arr[index]);
// // //     }
// // //   }
// // //   return newArr;
// // // }
// // // assert.deepStrictEqual(typeof myRemove, 'function');
// // // assert.deepStrictEqual(myRemove([1,2,3,4],3),[1,2,4])
// // // assert.notDeepStrictEqual(myRemove([1,2,3,4],3),[1,2,3,4])
// // // assert.deepStrictEqual(myRemove([1,2,3,4],5),[1,2,3,4])


// // /* ---------------------------------------------------------------------------------------- */

// // /* Questão 3 */

// // const assert = require('assert');

// // function myRemoveWithoutCopy(arr, item) {
// //   for (let index = 0, len = arr.length; index < len; index += 1) {
// //     if (arr[index] === item) {
// //       arr.splice(index, 1);
// //       index -= 1;
// //       len -= 1;
// //     }
// //   }

// //   return arr;
// // }
// // assert.deepStrictEqual(typeof myRemoveWithoutCopy, 'function');
// // assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3),[1,2,4])
// // assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3),[1,2,3,4])
// // assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5),[1,2,3,4])

// // /* --------------------------------------------------------------------------------------- */
// // /* Questão 4 */

// const assert = require('assert');

// function myFizzBuzz(num) {
//   if (typeof num !== 'number') return false;
//   if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
//   if (num % 3 === 0) return 'fizz';
//   if (num % 5 === 0) return 'buzz';
//   return 'Número não divisível por 3 e 5';
// }

// assert.deepStrictEqual(typeof myFizzBuzz, 'function');
// assert.deepStrictEqual(myFizzBuzz(15),'fizzbuzz')
// assert.deepStrictEqual(myFizzBuzz(9),'fizz')
// assert.deepStrictEqual(myFizzBuzz(25),'buzz')
// assert.deepStrictEqual(myFizzBuzz(11),'Número não divisível por 3 e 5')

