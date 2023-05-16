let number = true
function isOdd(num){
  if(num % 2 === 1){
    return number;
  }else{
    number = false;
    return number;
  }
}

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));
