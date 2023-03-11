function getNumber(message) {
  let number;
  do {
    number = prompt(message).replaceAll(/\s+/g, '');
    if (!/^\d+$/.test(number)) alert('❌ Wrong characters. Only digits allowed. Try again.')
  } while (!/^\d+$/.test(number))
  return +number;
}
