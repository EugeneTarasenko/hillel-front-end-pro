function main1(a = 2, b = 3, c) {
  return (c && typeof c == "function") ? c(sum(a, b)) : sum(a, b);
}

function main2() {
  const a = arguments[0] || 2;
  const b = arguments[1] || 3;

  return (!arguments[2]) ? sum(a, b) : arguments[2](sum(a, b))
}

function sum(a, b) {
  return a + b;
}

function makeDouble(arg) {
  return arg * 2;
}


console.log('Function main1 with no arguments:\n' + main1());
console.log('Function main1 with arguments 5 and 7:\n' + main1(5, 7));
console.log('Function main1 with arguments 5, 7, and the makeDouble function:\n' + main1(5, 7, makeDouble));

console.log('Function main2 with no arguments:\n' + main2());
console.log('Function main2 with arguments 5 and 7:\n' + main2(5, 7));
console.log('Function main2 with arguments 5, 7, and the makeDouble function:\n' + main2(5, 7, makeDouble));
