function generateKey(length, characters) {
  let key = '';
  const charactersLength = characters.length;
  
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    key += characters[randomIndex];
  }
  
  return key;
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const key1 = generateKey(16, characters);
const key2 = generateKey(16, characters);

console.log(key1);
console.log(key2);
