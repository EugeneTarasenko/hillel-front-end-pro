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
let userAge;

do {
  userAge = new Date().getFullYear() - +prompt('Enter your year of birth:').replaceAll(/\s+/g, '')
  if (userAge > MAX_AGE) alert(`Your year of birth can't be less than ${new Date().getFullYear() - MAX_AGE}.`)
  if (userAge < MIN_AGE) alert(`Your year of birth should be at least ${new Date().getFullYear() - MIN_AGE}. If you're less, you can't register.`)
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

