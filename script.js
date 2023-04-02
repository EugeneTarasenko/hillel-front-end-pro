const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement1(array, num) {
  const resultArray = [];
  for (let i of array) {
    if (i === num) {
      continue;
    }
    else {
      resultArray.push(i);
    }
  }
  return resultArray;
}

function removeElement2(array, num) {
  tempArray = [...array];
  tempArray.splice(array.indexOf(num), 1);
  return tempArray;
}

console.log("First function output: " + removeElement1(array, 2));
console.log("Second function output: " + removeElement2(array, 2));
console.log("Initial intact array: " + array);

