//function sum(a,b){
//  return a + b;
//}
//console.log(sum(10,20));

function checkPali(word){
  for (let index = 0; index < word.length/2; index += 1) {
    if(word[index] != word[word.length - index - 1])
    return false;
    return true;
  }
}
console.log(checkPali("nattan"));