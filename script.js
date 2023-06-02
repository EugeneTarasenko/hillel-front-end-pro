function getRandomColor() {
    const color1 = Math.floor(Math.random() * 256);
    const color2 = Math.floor(Math.random() * 256);
    const color3 = Math.floor(Math.random() * 256);
    return "rgb(" + color1 + ", " + color2 + ", " + color3 + ")";
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

    block.style.left = randomLeft + 'px';
    block.style.top = randomTop + 'px';
}

setInterval(changeColor, 500);
setInterval(moveSquare, 1000);
