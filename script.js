let squareColor;
const gridContainer = document.querySelector('.grid')
const square = document.createElement('div');

let gridSize = 16;

createGrid()

const newRes = document.querySelector('#newRes');
const newResBtn = document.querySelector('#newResBtn')
newResBtn.addEventListener('click', () => {
  const newGridSize = newRes.value

  if (isNaN(newGridSize) || newGridSize <= 0 || newGridSize > 100) {
    alert('Please enter a number between 1 and 100');
  } else {
    gridSize = newGridSize;
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

function clearGridColor(){
    let squares = document.querySelectorAll('.square')
    squares.forEach((square) => { 
        square.style.backgroundColor = 'white'
    })
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

let colorInput = document.querySelector('#color')
colorInput.addEventListener('input', () => {
    isDrawing = false;
})

function newSquareColor(){
    let colorInput = document.querySelector('#color')
    squareColor =  colorInput.value
    console.log(squareColor) 
}

function fillGridColor(){
    let gridColorInput = document.querySelector('#fill')
    let fillColor = gridColorInput.value
    let squares = document.querySelectorAll('.square')
    squares.forEach((square) => {
        square.style.backgroundColor = `${fillColor}`
    })

}

function eraseSquareColor(){
    squareColor = 'white'
}

const colorInputBtn = document.querySelector('#colorBtn')
colorInputBtn.addEventListener('click', () => {
    colorInputBtn.textContent = 'Change Color'
    newSquareColor()
})

squareColor = 'black'
gridContainer.addEventListener('mouseover', (e) => {
    if (isDrawing && e.target.classList.contains('square')){
        e.target.style.backgroundColor = `${squareColor}`;
    }
    console.log()
})


const clearBtn = document.getElementById('clear')
clearBtn.addEventListener('click', () =>{
    clearGridColor()
})

const eraserBtn = document.getElementById('eraser')
eraserBtn.addEventListener('click', () =>{
    colorInputBtn.textContent = 'Change to brush'
    eraseSquareColor()
})

const fillBtn = document.getElementById('fillBtn')
fillBtn.addEventListener('click' ,() => {
    fillGridColor()
})