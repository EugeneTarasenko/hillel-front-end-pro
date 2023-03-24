function createArr(firstNum, lastNum) {
  let arr = [];
  for (let i = firstNum; i <= lastNum; i++) {
    arr.push(i);
  }
  return arr;
}

function task1() {
  document.querySelector('.task1 .solution').textContent = createArr(10, 20).join(', ');
}

function task2() {
  document.querySelector('.task2 .solution').textContent = createArr(10, 20).map(item => item ** 2).join(', ');
}

function task3() {
  document.querySelector('.task3 .solution').textContent = createArr(1, 9).map(item => `7 x ${item} = ${item * 7}`).join(', ');
}

function task4() {
  document.querySelector('.task4 .solution').textContent = createArr(1, 15).reduce((a, b) => a + b);
}

function task5() {
  document.querySelector('.task5 .solution').textContent = createArr(15, 35).reduce((a, b) => a * b);
}

function task6() {
  let arr = createArr(1, 500);
  document.querySelector('.task6 .solution').textContent = arr.reduce((a, b) => a + b) / arr.length;
}

function task7() {
  document.querySelector('.task7 .solution').textContent = createArr(30, 80).filter(item => item % 2 === 0).reduce((a, b) => a + b);
}

function task8() {
  document.querySelector('.task8 .solution').textContent = createArr(100, 200).filter(item => item % 3 === 0).join(', ');
}

let num;

function task9() {
  num = +prompt('Enter a natural number:');

  const denominatorsArr = createArr(1, num).filter(item => num % item === 0);
  document.querySelector('.task9 .solution').textContent = denominatorsArr.join(', ');

  const positiveDenominatorsArr = denominatorsArr.filter(item => item % 2 === 0);

  document.querySelector('.task10 .solution').textContent = positiveDenominatorsArr.length;

  document.querySelector('.task11 .solution').textContent = positiveDenominatorsArr.reduce((a, b) => a + b, 0);
}


function task12() {
  let table = '<table>'
  for (let i = 1; i <= 10; i++) {
    table += '<tr>'
    for (let j = 1; j <= 10; j++) {
      table += `<td>${j} x ${i} = ${j * i}</td>`;
    }
    table += '</tr>'
  }

  table += '</table>'

  document.querySelector('.task12 .solution').innerHTML = table;
}


