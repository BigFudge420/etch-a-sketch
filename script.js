const gridContainer = document.querySelector('.grid')
const square = document.createElement('div');

let gridSize = 16

createGrid()

const newRes = document.querySelector('.newRes');
newRes.addEventListener('click', () => {
  const newGridSize = prompt('What would you like to be the amount of pixels on each side of the canvas?');
  const parsedNewGridSize = parseInt(newGridSize);
  
  if (isNaN(parsedNewGridSize) || parsedNewGridSize <= 0 || parsedNewGridSize > 100) {
    alert('Please enter a number between 1 and 100');
  } else {
    gridSize = parsedNewGridSize;
    gridContainer.innerHTML = '';
    createGrid();
  }
});

function createGrid(){
    const squareSize = 480/gridSize
    for (i = 0; i <  gridSize * gridSize; i++){ 
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

