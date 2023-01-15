
function isPrime(number){
  if(number<=2)
    return false;
  
  for(let it=2; it<number; it++)
    if(number%it===0)
      return false;
  return true;
}

function isArm(number){
  numberDigits = number.toString().split('');
  numberDigits = numberDigits.map(Number);
  let sum = 0;
  numberDigits.forEach(element => {
    sum+=element*element*element;
  });
  if(sum===number)
    return true;
  return false;
}

let test = 0;
console.log(isPrime(test));
console.log(isArm(test));
