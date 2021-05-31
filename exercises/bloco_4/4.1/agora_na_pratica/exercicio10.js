function profit(cost,sale){
valueCost = cost + 0.2*cost; 
gain = sale - valueCost; 

if (cost < 0 || sale < 0 ){
  return 'erro';
}else{
  return gain;
}
}

console.log(profit(500,100));
