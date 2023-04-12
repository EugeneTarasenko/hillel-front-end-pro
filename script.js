
function power(num, exp) {
  return (exp == 0) ? 1 : num * power(num, exp - 1)
}


function foo(){
  const num = +prompt('Enter a number: ');
  const exp = +prompt('Enter a number to define an exponent: ');
  const pow = power(num, exp);

  alert(`The power of a number ${num} with an exponent ${exp} is ${pow}`);
}