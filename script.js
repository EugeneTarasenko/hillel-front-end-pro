function mathOperation() {

  function getCharacter(message, type) {

    let input;

    if (type === 'number') {
      do {
        input = prompt(message);
        if (input === '') alert('❌ Empty string. Try again');
        if (isNaN(input)) alert('❌ Wrong symbol. Try again');
      } while (isNaN(input) || input === '');
      return input;
    }

    if (type === 'sign') {
      do {
        input = prompt(message);
        if (input === null) break;
        if (input === '') {
          alert('❌ Empty string. Try again');
          continue;
        }
        if (!/^[+\-*\/]$/.test(input)) alert('❌ Wrong character. Try again');
      } while (input === '' || !/^[+\-*\/]$/.test(input));
      return input;
    }
  }

  let firstNumber = getCharacter('Enter 1st valid number:', 'number');
  if (firstNumber === null) return;
  firstNumber = Number(firstNumber);

  let mathSign = getCharacter('Enter math sign +, -, * or / :', 'sign');
  if (mathSign === null) return;

  let secondNumber = getCharacter('Enter 2nd valid number:', 'number');
  if (secondNumber === null) return;
  secondNumber = Number(secondNumber);

  if (mathSign === '+') alert(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
  if (mathSign === '-') alert(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
  if (mathSign === '*') alert(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
  if (mathSign === '/') alert(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomcolor() {
  return `rgb(${getRandomNumber(0, 256)}, ${getRandomNumber(0, 256)}, ${getRandomNumber(0, 256)})`;
}

function generateOneCircle() {
  const size = getRandomNumber(10, 200);
  const div = document.createElement('div');
  div.classList.add('circle');
  div.style.borderRadius = '100%';
  div.style.width = size + 'px';
  div.style.aspectRatio = '1/1';
  div.style.border = `solid ${size * .1}px ${getRandomcolor()}`;
  div.style.backgroundColor = `${getRandomcolor()}`;
  document.querySelector('.circlesContainer').appendChild(div);
}

function generateManyCircle() {
  let quantity;
  do {
    quantity = prompt('How many circles would you like to generate?')
    if (quantity === null) return;
    if (quantity === '' || !Number.isInteger(+quantity) || +quantity <= 0) alert('❌ Wrong input. Try again')
  } while (quantity === '' || !Number.isInteger(+quantity) || +quantity <= 0);

  for (let i = 0; i <= quantity; i++) {
    generateOneCircle();
  }
}

document.querySelector('#btn-1').addEventListener('click', mathOperation);

document.querySelector('#btn-2').addEventListener('click', generateOneCircle);

document.querySelector('#btn-3').addEventListener('click', generateManyCircle);

document.querySelector('#btn-4').addEventListener('click', () => {
  document.querySelector('.circlesContainer').innerHTML = '';
});

