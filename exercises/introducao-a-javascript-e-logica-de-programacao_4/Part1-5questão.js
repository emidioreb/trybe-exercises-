let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente:'Sim'
};

let secondObject = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
}
for(let key in info){
  if(info[key] === info.recorrente && info[key] === 'Sim' && secondObject[key] === 'Sim'){
    console.log('Ambos recorrentes');
  }else{
    console.log(info[key],"e",secondObject[key]);
  }
}
