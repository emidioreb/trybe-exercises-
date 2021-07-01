
const transformation = (nome) => {
  const email = nome.toLowerCase().split(' ').join('_');
  return `Nome completo:${nome}, email: ${email}@trybe.com`
}
const newEmployees = (callBack) => {
  const employees = {
    id1: callBack('Pedro Guerra'), 
    id2: callBack('Luiza Drumond'),
    id3: callBack('Carla Paiva'), 
  }
  return employees;
};

console.log(newEmployees(transformation));