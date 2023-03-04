const name = prompt('Enter your name:').trim();
const surname = prompt('Enter your surname:').trim();
let email = prompt('Enter your email:').replaceAll(/\s+/g, '').toLowerCase();

if (!email.includes('@')) email = `not valid email <b>${email}</b> (symbol @ not exist)`;
else if (email.indexOf('@') === 0) email = `not valid email <b>${email}</b> (symbol @ find in first place)`;
else if (email.indexOf('@') === email.length - 1) email = `not valid email <b>${email}</b> (symbol @ find in last place)`;
else email = `<b>${email}</b>`;

const birthYear = +prompt('Enter your year of birth:').replaceAll(/\s+/g, '');
const age = new Date().getFullYear() - birthYear;

const list = document.createElement('ul')
document.querySelector('body').appendChild(list);
const listItem1 = document.createElement('li');
const listItem2 = document.createElement('li');
const listItem3 = document.createElement('li');
listItem1.innerHTML = `Full name: <b>${name} ${surname}</b>`;
listItem2.innerHTML = `Email: ${email}`;
listItem3.innerHTML = `Age: <b>${age}</b>`;
list.appendChild(listItem1);
list.appendChild(listItem2);
list.appendChild(listItem3);

