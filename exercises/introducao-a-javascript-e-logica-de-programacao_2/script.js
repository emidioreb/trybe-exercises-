// exercicio 1 

//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//for (const number of numbers) {
//  console.log(number);  
//}

// exercicio 2

//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//let total = numbers.reduce((total, numbers) => total + numbers, 0);
//console.log(total);

//exercicio 3

//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//let total = numbers.reduce((total, numbers) => total + numbers, 0);
//let media = total/numbers.length;
//console.log(media);

//exercicio 4

//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//let total = numbers.reduce((total, numbers) => total + numbers, 0);
//let media = total/numbers.length;
//if (media > 20){
//  console.log("valor maior que 20");
//}else{
//  console.log("valor menor ou igual a 20");
//}

//exercicio 5

//let maior = 0;
//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//for (let index = 0; index < numbers.length; index +=1) {
//  if(numbers[index] > maior){
//    maior = numbers[index];
//  }   
//}
//console.log(maior); 
 
//exercicio 6

//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//for (let index = 0; index < numbers.length; index +=1) {
//  if(numbers[index]%2 == 0){
//    console.log(numbers[index], "é par");
//  }else{
//    console.log(numbers[index], "é impar");
//  }     
//}

// exercicio 7
//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//let menor = numbers[0];
//for (let index = 0; index < numbers.length; index +=1) {
//  if(numbers[index] < menor){
//    menor = numbers[index];
//  }   
//}
//console.log(menor); 

exercicio 8
let numbers = [];

for (let index = 1; index <= 25; index += 1) {
  numbers.push(index);
}

console.log(numbers);

//exercicio 9

array = [1, 2, 3, 4, 5, 6, 7, 8,9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
for (let index = 0; index < array.length; index += 1) {
  result = array[index]/2
  console.log(result);  
}


