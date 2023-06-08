const gridContainer = document.querySelector('.grid')
const square = document.createElement('div');
for (i = 0; i < 16*16; i++){ 
    const square = document.createElement('div');
    square.classList.add('square');
    gridContainer.appendChild(square);
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