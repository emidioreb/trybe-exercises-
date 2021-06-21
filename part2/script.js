const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//primeiraQuestão

const turnoLesson2 = () => lesson2.turno = 'manhã';
turnoLesson2();
// console.log(lesson2);

//segundaQuestão
// const keysObject = (lesson) => pairKeyValue = Object.keys(lesson);
// console.log(keysObject(lesson1));

// terceiraQuestão
// const cont = (lesson) => Object.keys(lesson).length;
// console.log(cont(lesson1));

// quartaQuestão
// const valueObject = (lesson) => pairKeyValue = Object.values(lesson);
// console.log(valueObject(lesson1));

//quintaQuestão
const allLessons = Object.assign({},{lesson1},{lesson2},{lesson3});
// console.log(allLessons);

//sextaQuestão
// const contStudent1 = allLessons.lesson1.numeroEstudantes;
// const contStudent2 = allLessons.lesson2.numeroEstudantes;
// const contStudent3 = allLessons.lesson3.numeroEstudantes;
// const sum = contStudent1+contStudent2+contStudent3

// console.log(sum);
//ajuda com gabarito da trybe;
// const getNumberOfStudents = (obj) => {
//   let total = 0;
//   const array = Object.keys(obj);
//   for (index in array) {
//     total = total + obj[array[index]].numeroEstudantes;
//   }
//   return total;
// };
// console.log(getNumberOfStudents(allLessons));

// sétimaQuestão
// const valuePosition = (lesson,num) => pairKeyValue = Object.values(lesson)[num];
// console.log(valuePosition(lesson1,1));

//oitavaQuestão
const valuePosition = (lesson,getKey,getValue) =>{
  if (lesson === lesson1 || lesson === lesson2 || lesson === lesson3){
    if (getKey === 'materia' || getKey === 'numeroEstudantes' || getKey === 'professor' || getKey === 'turno' ){
      if(getValue === 'matemática' || getValue === 'história' || getValue === '20' || getValue === '10'|| getValue === 'maria clara' || getValue === 'carlos'|| getValue === 'manhã' || getValue === 'noite'){
        return true
      }
  }
  } return false
}
console.log(valuePosition(lesson2,'professor','tarde'));