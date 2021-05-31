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
  buttonSon.id = 'btn-holiday';
  buttonContainer.appendChild(buttonSon);
  buttonSon.innerHTML = newbutton;
};

createButton('feriado');

function displayHolidays() {
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday')
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'white';

  getHolidayButton.addEventListener('click', function() {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === setNewColor) {
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = setNewColor;
      }
    }
  })
};

displayHolidays();

function createButtonFriday (newButtonFriday){
  const buttonContainer = document.querySelector(".buttons-container"); 
  const buttonFriday = document.createElement('button');
  buttonFriday.id = 'btn-friday'
  buttonContainer.appendChild(buttonFriday)
  buttonFriday.innerHTML = newButtonFriday;
}

createButtonFriday('Sexta-feira')

function displayFridays(fridaysArray) {
  let getFridayButton = document.querySelector('#btn-friday');
  let fridays = document.getElementsByClassName('day friday');
  let newFridayText = 'SEXTOU o/';

  getFridayButton.addEventListener('click', function() {
  for (let index = 0; index < fridays.length; index += 1) {
    if (fridays[index].innerHTML !== newFridayText) {
        fridays[index].innerHTML = newFridayText;
    } else {
        fridays[index].innerHTML = fridaysArray[index];
      }
    }
  })
};

let dezFridays = [ 4, 11, 18, 25 ];

function dayMouseOver() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
}; 
function dayMouseOut() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseout', function(event) {
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';
  })
};
 

dayMouseOver();
dayMouseOut();

function addTask (parament){
  const mytask = document.querySelector('.my-tasks');
  const getAddTask = document.createElement('span');
  getAddTask.id = 'add-task';
  mytask.appendChild(getAddTask);

  getAddTask.innerHTML = parament;
}

addTask('cozinhar');

function addColorTask (color){
  const addTask = document.querySelector('#add-task');
  const mytask = document.querySelector('.my-tasks');
  const getAddColorTask = document.createElement('div');
  getAddColorTask.className = 'task';
  mytask.appendChild(getAddColorTask);

  getAddColorTask.style.backgroundColor = color;
  
}

addColorTask('green');


