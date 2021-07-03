const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
let cont = 0
  for (let index = 0; index < studentAnswers.length; index++) {
    if(rightAnswers[index] === studentAnswers[index] ){
        cont = cont + 1
      }else if(studentAnswers[index] === 'N.A') {
        cont = cont + 0
        }else if(rightAnswers[index] !== studentAnswers[index]) {
          cont = cont - 0.5
      }
    }
console.log(cont)

