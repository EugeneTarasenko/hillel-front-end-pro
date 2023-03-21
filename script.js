const fontNerkoOne = new FontFace("Nerko One", "url(NerkoOne-Regular.ttf)", {
  style: "normal",
  weight: "400",
  stretch: "condensed",
});
document.fonts.add(fontNerkoOne);

const body = document.querySelector('body');
body.style.backgroundColor = 'green';
body.style.fontFamily = 'Nerko One';
body.style.lineHeight = 1;

const main = document.createElement('div');
body.appendChild(main)

document.querySelector('body>div').classList.add('main')
main.style.display = 'flex';
main.style.flexWrap = 'wrap';
main.style.gap = '.7rem';
main.style.justifyContent = 'center';
main.style.padding = '1rem';

for (let i = 0; i < 4; i++) {

  let suit;

  switch (i) {
    case 0:
      suit = 'clubs';
      break;
    case 1:
      suit = 'diamonds';
      break;
    case 2:
      suit = 'hearts';
      break;
    case 3:
      suit = 'spades';
      break;
  }

  for (let j = 6; j <= 14; j++) {

    let valueImg;

    switch (j) {
      case 11:
        valueImg = './images/jack.svg';
        break;
      case 12:
        valueImg = './images/queen.svg';
        break;
      case 13:
        valueImg = './images/king.svg';
        break;
      case 14:
        valueImg = `./images/${suit}.svg`;
        break;
      default:
        valueImg = '';
    }

    const cardJS = document.createElement('div');
    cardJS.style.width = '5rem';
    cardJS.style.aspectRatio = '2.5 / 3.5';
    cardJS.style.backgroundColor = 'white';
    cardJS.style.borderRadius = '.35rem'
    cardJS.style.border = '1px solid lightgrey';
    cardJS.style.boxShadow = 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px';
    cardJS.style.position = 'relative';
    cardJS.style.backgroundRepeat = 'no-repeat';
    cardJS.style.backgroundImage = `url('${valueImg}'), url('./images/${suit}.svg'), url('./images/${suit}-r.svg')`;
    cardJS.style.backgroundSize = '50%, 14%, 14%';
    cardJS.style.backgroundPosition = 'center, top 1.2rem left .1rem, bottom 1.2rem right .1rem';

    cardJS.setAttribute('data-value', j);
    main.appendChild(cardJS);
  }
}

const cards = document.querySelectorAll('.main>div');

cards.forEach(card => {

  let value;

  if (card.dataset.value == 11) value = 'J';
  else if (card.dataset.value == 12) value = 'Q';
  else if (card.dataset.value == 13) value = ' K';
  else if (card.dataset.value == 14) value = ' A';
  else value = '' + card.dataset.value;

  const valueTop = document.createElement('p');
  const valueButtom = document.createElement('p');
  valueTop.textContent = value;
  valueButtom.textContent = value;
  card.appendChild(valueTop);
  card.appendChild(valueButtom);
})

const verticalIndentation = '.1rem';
const horizontalIndentation = '.1rem';

const valueTopArr = document.querySelectorAll('.main>div> :first-child');
valueTopArr.forEach(elem => {

  elem.style.margin = 0;
  elem.style.position = 'absolute';
  elem.style.top = verticalIndentation;
  elem.style.left = horizontalIndentation;
})

const valueBottomArr = document.querySelectorAll('.main>div> :last-child');
valueBottomArr.forEach(elem => {
  elem.style.margin = 0;
  elem.style.position = 'absolute';
  elem.style.bottom = verticalIndentation;
  elem.style.right = horizontalIndentation;
  elem.style.transform = 'rotate(180deg)';
})
