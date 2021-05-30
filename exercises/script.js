function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

function createDaysMonth() {
const dezDays = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
const dezDaysList = document.getElementById('days');

for (let index = 0; index < dezDays.length; index += 1) {
  const daysList = dezDays[index];
  const dayListNew = document.createElement('li');
  

  if(daysList === 24 | daysList === 31){
    dayListNew.innerHTML = daysList;
    dayListNew.className = 'day holiday';
    dezDaysList.appendChild(dayListNew);
  }else if(daysList === 4 | daysList === 11 | daysList === 18 ){
    dayListNew.innerHTML = daysList;
    dayListNew.className = 'day friday';
    dezDaysList.appendChild(dayListNew);
  }else if(daysList === 25){
    dayListNew.innerHTML = daysList;
    dayListNew.className = 'day holiday friday';
    dezDaysList.appendChild(dayListNew);
  }else{
    dayListNew.innerHTML = daysList;
    dayListNew.className = 'day';
    dezDaysList.appendChild(dayListNew);
  }

  };
};

createDaysMonth();

function createButton(newbutton){
  const buttonContainer = document.querySelector('.buttons-container');
  const buttonSon = document.createElement('button');
  const buttonSonid = 'btn-holiday';
  buttonSon.id = buttonSonid; 
  buttonContainer.appendChild(buttonSon);
  buttonSon.innerHTML = newbutton;

};

createButton('feriado');

