let squareColor;
const gridContainer = document.querySelector('.grid')
const square = document.createElement('div');
let num = 0;
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
    for (let i = 0; i <  gridSize * gridSize; i++){ 
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

function randomColor(){
    const allSquares = document.querySelectorAll('.square')
    allSquares.forEach((eachSquare) => {
        eachSquare.addEventListener('mouseenter', () => {
            console.log('sundkjsn')
            R = Math.floor(Math.random()*256)
            G = Math.floor(Math.random()*256)
            B = Math.floor(Math.random()*256)
            randomSquareColor = `rgb(${R},${G},${B})`
        })
    })
    return
}

function stopRandomColor() {
    const allSquares = document.querySelectorAll('.square');
    allSquares.forEach((eachSquare) => {
      eachSquare.removeEventListener('mouseenter', () => {});
    });
  }
  
const colorInputBtn = document.querySelector('#colorBtn')
colorInputBtn.addEventListener('click', () => {
    num = 0;
    colorInputBtn.textContent = 'Change Color'
    stopRandomColor()
    newSquareColor()
})

squareColor = 'black'
gridContainer.addEventListener('mouseover', (e) => {
    if (isDrawing && e.target.classList.contains('square')){
        e.target.style.backgroundColor = `${squareColor}`;
    }
    console.log()
})

gridContainer.addEventListener('mouseover', (e) => {
    if (num > 0 && (isDrawing && e.target.classList.contains('square'))){
        e.target.style.backgroundColor = randomSquareColor
    }
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

const rainbowBtn = document.querySelector('#rainbowBtn')
rainbowBtn.addEventListener('click', ()=>{
    num++
    if (num > 0){
        randomColor()
    }
})