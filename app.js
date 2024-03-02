const board = document.querySelector('#board');

const SQUARES_NUMBER = 450;

for(let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        setColor(square);
        setTimeout(() => resetColor(square), 1000); 
    });
    
    board.appendChild(square);
}

function setColor(element){
    const randomColor = getRandomColor();
    element.style.backgroundColor = randomColor;
}

function resetColor(element){
    element.style.backgroundColor = '';
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
