//Escolha do estado

function createStateOptions() {
  let states = document.getElementById('state');
  let stateOptions = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

  for (let index = 0; index < stateOptions.length; index += 1) {
    let createOptions = document.createElement('option');
    states.appendChild(createOptions).innerText = stateOptions[index];
    states.appendChild(createOptions).value = stateOptions[index];
  }
}
createStateOptions();

// function stopDefAction(evt) {
//   evt.preventDefault();
// }

// document.getElementById('button').addEventListener(
//   'click', stopDefAction, false
// )

// stopDefAction();
const clearButton = document.querySelector('#clear')
clearButton.addEventListener('click', clear);

function clear() {
  if(document.getElementById('name').value!="") {
  document.getElementById('name').value="";
  document.getElementById('email').value="";
  document.getElementById('CPF').value="";
  document.getElementById('Adress').value="";
  document.getElementById('City').value="";
  document.getElementById('state').value="";
  document.getElementById('house').value="";
  document.getElementById('apart').value="";
  document.getElementById('aboutme').value="";
  document.getElementById('position').value="";
  document.getElementById('description').value="";
  document.getElementById('date').value="";
  }
}
  