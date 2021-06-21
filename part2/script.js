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
// console.log(keysObject(lesson2));

// terceiraQuestão
// const cont = (lesson) => Object.keys(lesson).length;
// console.log(cont(lesson1));

// quartaQuestão
// const valueObject = (lesson) => pairKeyValue = Object.values(lesson);
// console.log(valueObject(lesson1));

//quintaQuestão
const allLessons = Object.assign({},{lesson1},{lesson2},{lesson3});
console.log(allLessons);