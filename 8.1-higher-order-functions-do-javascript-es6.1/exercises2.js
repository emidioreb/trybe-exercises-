const sort = () => {
  let rand = Math.floor(Math.random()*5)+1;
  console.log(rand); 
  return rand
}

const verification = (callBack) => {
  if (callBack === 2){
    return 'Parabéns você ganhou'
  }else{
    return 'Tente Novamente'
  }
}
console.log(verification(sort()));