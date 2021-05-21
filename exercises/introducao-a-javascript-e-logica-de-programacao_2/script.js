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

let init = 0;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = numbers.length-1; numbers.length > 0; index -=1) {
  if(numbers[index] > init){
    maior = numbers[index];
  }   
}
console.log(maior); 
 
