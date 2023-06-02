# Homework №19

## Task:

1. В `html` создаем квадрат, например `div.block`;
```html
<div class="block"></div>

<style>
	.block{
		width: 100px;
		height: 100px;
		background: black;
		position: relative;
		left: 0;
		top: 0;
		transition: 0.5s;
	}
</style>
```

2. С помощью функции `setInterval`, каждые пол секунды меняем цвет квадрата на любой рандомный цвет.
  - Можно сформировать массив с цветами и с него брать рандомное значение.
  - Можно написать функцию, которая будет возвращать строку `rgb(color_1, color_2, color_3)`, в которой `color_1`, `color_2`, `color_3` это рандомное значение в диапазоне от 0 до 255 включительно.
3. С помощью функции `setInterval`, каждую секунду перемещаем квадрат на любое место в пределах body. Для этого квадрату задаем рандомные значения свойств `left` и `top`. Квадрат не должен выходить за пределы `body`.
4. Ширину `body` можно найти с помощью свойства `window.innerWidth`.
5. Высоту `body` можно найти с помощью свойства `window.innerHeight`.


## Solution:

```js
function getRandomColor() {
    const color1 = Math.floor(Math.random() * 256);
    const color2 = Math.floor(Math.random() * 256);
    const color3 = Math.floor(Math.random() * 256);
    return `rgb(${color1},${color2},${color3})`;
}

function changeColor() {
    const block = document.querySelector('.block');
    block.style.background = getRandomColor();
}

function moveSquare() {
    const block = document.querySelector('.block');
    const bodyWidth = window.innerWidth;
    const bodyHeight = window.innerHeight;

    const randomLeft = Math.floor(Math.random() * (bodyWidth - 100));
    const randomTop = Math.floor(Math.random() * (bodyHeight - 100));

    block.style.left = `${randomLeft}px`;
    block.style.top = `${randomTop}px`;
}

setInterval(changeColor, 500);
setInterval(moveSquare, 1000);
```
