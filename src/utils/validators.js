export function ValidatorCEP(item){
  const cepString = String(item);

  if(cepString.length !== 8 ){
    return false;
  }
  else if(typeof(item) !== 'number'){
    return false;
  }

  return true;
}
