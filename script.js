function main() {
  const arrLength = +prompt("Enter a number to define array's length");
  const arrA = [];

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  for (let i = 0; i < arrLength; i++) {
    let randomNum;
    do {
      randomNum = getRandomInt(100);
    } while (arrA.includes(randomNum))
    arrA.push(randomNum);
  }

  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  const arrB = arrA.filter(item => isPrime(item));
  const minNum = arrB.length === 0 ? '' : Math.min(...arrB);
  const maxNum = arrB.length === 0 ? '' : Math.max(...arrB);

  let output = '';
  output += `Array of length ${arrLength}: [${arrA.join(', ')}]`;

  if (arrB.length === 0) {
    output += `\nNo prime numbers in this array.`;
  } else if (arrB.length === 1) {
    output += `\nA single prime numbers in this array is ${arrB.join(', ')}`
  } else {
    output += `\nPrime numbers in this array are: ${arrB.join(', ')}\nMininum prime number is: ${minNum}\nMaximum prime number is: ${maxNum}`
  }

  alert(output);
}

