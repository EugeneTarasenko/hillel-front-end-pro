function mean() {
  const firstNumber = getNumber('Enter first number: ');
  if (firstNumber === null) return;

  const secondNumber = getNumber('Enter second number: ');
  if (secondNumber === null) return;

  const thirdNumber = getNumber('Enter third number: ');
  if (secondNumber === null) return;

  const mean = (+firstNumber + +secondNumber + +thirdNumber) / 3;

  alert(`The arithmetic mean of ${firstNumber}, ${secondNumber}, and ${thirdNumber} is ${Number(mean.toFixed(2))}`);
}

function getNumber(message) {
  let number;
  do {
    number = prompt(message);
    if (number === '') alert('❌ Empty string. Try again');
    if (isNaN(number)) alert('❌ Wrong symbol. Try again');
  } while (isNaN(number) || number === '');
  return number;
}

mean();
