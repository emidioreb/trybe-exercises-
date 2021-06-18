// Exercise 1:

// const testingScope = (escopo) => {
//   if (escopo === true) {
//     let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = `${ifScope }ótimo, fui utilizada no escopo !`;
//     console.log(ifScope);
//   } else {
//     let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
// }
// testingScope(false);

// Exercise 2:


const odd = oddsAndEvens => oddsAndEvens.sort(function(a, b){return a - b});
console.log(odd([13, 3, 4, 10, 7, 2]));

