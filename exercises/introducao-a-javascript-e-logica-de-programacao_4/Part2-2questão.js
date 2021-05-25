
myArray = [2, 3, 6, 7, 10, 1];  
let biggest = 0;
for (let index = 0; index < myArray.length; index += 1) {
  if (myArray[index] > biggest){
    biggest = myArray[index];
  }
}
let indice = myArray.indexOf(biggest);
console.log(indice);


