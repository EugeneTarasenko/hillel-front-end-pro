const mainBtn = document.querySelector('#main-btn');

mainBtn.addEventListener('click', quiz)

function quiz() {
  let score = 0;

  const start = confirm("Do you want to start a quiz?");
  if (!start) return;

  const q1 = prompt('How much is 2 + 2?');
  if (q1 == '4') score += 10;

  const q2 = prompt('Does the sun rises in the east? (yes/no)');
  if (q2 && q2.toLowerCase() == 'yes') score += 10;


  const q3 = prompt('How much is 5/0?');
  if (q3 && q3.toLowerCase() == 'division by 0 is forbidden') score += 10;
  if (q3 && q3.toLowerCase() === 'undefined') score += 10;

  const q4 = prompt('What is the color of the sky?');
  if (q4 && q4.toLocaleLowerCase() == 'blue') score += 10;

  const q5 = prompt('What is a correct answer to the ultimate question of life, the universe, and everything.')
  if (q5) score += 10;

  alert(`Your score is ${score}.\nCorrect answers should have been:\n1) 4\n2) yes\n3) division by 0 is forbidden/undefined\n4) blue\n5) ...`);
}