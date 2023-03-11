function getNumber(message) {
  let number;
  do {
    number = prompt(message).replaceAll(/\s+/g, '');
    if (!/^\d+$/.test(number)) alert('❌ Wrong characters. Only digits allowed. Try again.')
  } while (!/^\d+$/.test(number))
  return +number;
}


function calculateSumOfFactorials() {
  const firstNumber = getNumber('Enter first number:');

  let secondNumber;
  do {
    secondNumber = getNumber(`Enter second number. \n⚠️ Notice: It should be bigger than ${firstNumber}.`);
    if ((secondNumber === firstNumber)) alert(`❌ Second number (${secondNumber}) equals the first one (${firstNumber}). Enter a bigger number.`)
    if ((secondNumber < firstNumber)) alert(`❌ ${secondNumber} is less than ${firstNumber}. Enter a bigger number.`)
  } while (!(secondNumber > firstNumber))

  let stride;
  do {
    stride = getNumber(`Enter stride number. \n⚠️ Notice: It should be bigger than 0.`);
    if (stride <= 0) alert(`❌ Number ${stride} is less or equels 0. Try again.`)
  } while (stride <= 0)

  const numberArr = [];
  for (let i = firstNumber; i <= secondNumber; i += stride) {
    numberArr.push(i);
  }

  let sumOfFactorials = 0;
  for (number of numberArr) {
    let factorial = 1;
    for (let i = number; i >= 1; i--) {
      factorial *= i;
    }
    sumOfFactorials += factorial;
  }

  alert(`First number: ${firstNumber};\nSecond number ${secondNumber};\nStride number: ${stride};\nNumbers included: ${numberArr};\nSum of factorials: ${sumOfFactorials}`);
}
