let aliquotINSS;
let aliquotIR;
let salaryBase;
let salary = 3000
let liquido;

if (salary <= 1556.64){
  aliquotINSS = salary*0.08;
}else if(salary > 1556.64 && salary <= 2584.92){
  aliquotINSS = salary*0.09;
}else if(salary > 2594.93 && salary <= 5189.82){
  aliquotINSS = salary*0.11;
}else{
  aliquotINSS = 570.88;
}

salaryBase = salary - aliquotINSS;
console.log(salaryBase);

if (salaryBase <= 1903.98){
  aliquotIR = 0;
}else if(salaryBase <= 2826.65){
  aliquotIR = (salaryBase*0.075) - 142.8; 
}else if(salaryBase <= 3751.05){
  aliquotIR = (salaryBase*0.15) - 354.8;
}else if(salaryBase <= 4664.68){
  aliquotIR = (salaryBase*0.225) - 636.13;
}else{
  aliquotIR = (salaryBase*0.275) - 869.36;
}

liquido = salaryBase - aliquotIR;

console.log(liquido);

