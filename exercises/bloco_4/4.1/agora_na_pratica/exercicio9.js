
function test(num1,num2,num3){
  if (num1 % 2 != 0 || num2 % 2 != 0 || num3 % 2 != 0){
    return true
  }else{
    return false
  }  
}

console.log(test(3,2,2));
