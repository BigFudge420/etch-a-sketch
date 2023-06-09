const gridContainer = document.querySelector('.grid')
const square = document.createElement('div');

let gridSize = 16

for (i = 0; i < gridSize * gridSize; i++){ 
    const square = document.createElement('div');
    square.classList.add('square');
    gridContainer.appendChild(square);
}

let  parsedGridSize = parseInt(gridSize)

const newRes = document.querySelector('.newRes')
newRes.addEventListener('click', () => {
    gridSize = prompt('What would you like to be the amount of pixels on each side of the canvas?')
    parsedGridSize = parseInt(gridSize)
    if (isNaN(parsedGridSize) || parsedGridSize <= 0 || parsedGridSize > 100){
        alert('Please enter a number between 1 and 100')
    }
    gridContainer.innerHTML = "";

    createNewGrid()
})

function createNewGrid(){
    const squareSize = 480/parsedGridSize
    for (i = 0; i <  parsedGridSize * parsedGridSize; i++){ 
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`
        square.style.height = `${squareSize}px`
        gridContainer.appendChild(square);
    }
}

let isDrawing = false;

gridContainer.addEventListener('mousedown', () => {
    isDrawing = true;
})

gridContainer.addEventListener('mouseup', () => {
    isDrawing = false;
})

gridContainer.addEventListener('mouseleave', () => {
    isDrawing = false;
})

gridContainer.addEventListener('mouseover', (e) => {
    if (isDrawing && e.target.classList.contains('square')){
        e.target.style.backgroundColor = 'black';
    }
})

