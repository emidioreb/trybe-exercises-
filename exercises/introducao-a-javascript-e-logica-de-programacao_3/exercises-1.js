// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, 
// seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

// 1 - declarar variárel e declara variável para receber.
// 2 - loop for para repetição.

let n = 10
let sum = " ";


for (let index = 0; index < n; index += 1) {
  sum = sum + "*"; 
}
// abrir outro loop de repetição para repetir as linhas 5 vezes.

for (let index = 0; index < n; index += 1) {
  console.log(sum); 
}

