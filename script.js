let userFirstName = prompt('Enter your name:').trim();
userFirstName = userFirstName[0].toUpperCase() + userFirstName.slice(1).toLowerCase();
let userLastName = prompt('Enter your surname:').trim();
userLastName = userLastName[0].toUpperCase() + userLastName.slice(1).toLowerCase();
let userEmail = prompt('Enter your email:').replaceAll(/\s+/g, '').toLowerCase();

let emailEntry;
if (!userEmail.includes('@')) {
  emailEntry = `not valid email <b>${userEmail}</b> (symbol @ not exist)`;
} else if (userEmail.startsWith('@')) {
  emailEntry = `not valid email <b>${userEmail}</b> (symbol @ find in first place)`;
} else if (userEmail.endsWith('@')) {
  emailEntry = `not valid email <b>${userEmail}</b> (symbol @ find in last place)`;
} else { emailEntry = `<b>${userEmail}</b>`; }

const MAX_AGE = 100;
const MIN_AGE = 6;
const CURRENT_YEAR = new Date().getFullYear();
let yearOfBirth;
let userAge;

function getNumber(message) {
  let number;
  do {
    number = prompt(message).replaceAll(/\s+/g, '');
    if (!/^\d+$/.test(number)) alert('❌ Wrong characters. Only digits allowed. Try again.')
  } while (!/^\d+$/.test(number))
  return +number;
}

do {
  userAge = CURRENT_YEAR - getNumber('Enter the year when you were born:');
  if (userAge > MAX_AGE || userAge < MIN_AGE) alert(`❌ Wrong age. You must be at least ${MIN_AGE} and no more than ${MAX_AGE} years old. Try again.`)
}
while (userAge > MAX_AGE || userAge < MIN_AGE)

const list = document.createElement('ul');
document.querySelector('body').appendChild(list);
const listItem1 = document.createElement('li');
const listItem2 = document.createElement('li');
const listItem3 = document.createElement('li');
listItem1.innerHTML = `Full name: <b>${userFirstName} ${userLastName}</b>`;
listItem2.innerHTML = `Email: ${emailEntry}`;
listItem3.innerHTML = `Age: <b>${userAge}</b>`;
list.appendChild(listItem1);
list.appendChild(listItem2);
list.appendChild(listItem3);

