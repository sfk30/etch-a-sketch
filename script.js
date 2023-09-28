const grid = document.querySelector('#grid')
const userInputs = document.getElementById('user-inputs')
const alert = document.getElementsByClassName('alert')

const popup = document.createElement('p')
userInputs.appendChild(popup)
popup.innerHTML = ''

const blackPen = document.getElementById('black')
const rainbowPen = document.getElementById('rainbow')
const eraserPen = document.getElementById('eraser')
const userClear = document.getElementById('clear')
userClear.addEventListener('click', eraseMe);

let userSize = document.getElementById('user-size');
let userSubmit = document.getElementById('sub-btn');
userSubmit.addEventListener('click', makeGrid);
userSubmit.addEventListener('click', colorMe);



function makeGrid() {
    let number = userSize.value;
    grid.innerHTML = ''
    if (number <= 0 || number > 99){
        popup.innerHTML = 'Enter a number greater than 0 and less than 99'
        defaultGrid()
    } else if (isNaN(number)) {
        popup.innerHTML = 'Enter a valid number!'
    } else {
        popup.innerHTML = ''
        for (let i = 0; i < number; i ++) {
            let row = document.createElement('div')
            row.classList.add('row')
            grid.appendChild(row)
            for (let j = 0; j < number; j ++) {
                let column = document.createElement('div')
                column.classList.add('column')
                row.appendChild(column)
            }
        }
    }
}


function colorMe() {
    const columns = document.querySelectorAll('.column')
    columns.forEach((column) => {
        column.addEventListener('mouseenter', (event) => {
            if (blackPen.checked) {
            event.target.style.backgroundColor = 'black'
            } else if (rainbowPen.checked) {
                event.target.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16)
            } else if (eraserPen.checked) {
                event.target.style.backgroundColor = ''
            } else {
                event.target.style.backgroundColor = 'purple'
            }
        })
    })
}

function eraseMe() {
    grid.innerHTML = ''
    defaultGrid()
}

function defaultGrid() { 
        for (let i = 0; i < 10; i ++) {
        let row = document.createElement('div')
        row.classList.add('row')
        grid.appendChild(row)
        for (let j = 0; j < 10; j ++) {
            let column = document.createElement('div')
            column.classList.add('column')
            row.appendChild(column)
        }
    }
    colorMe()
}

defaultGrid();