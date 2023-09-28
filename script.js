const grid = document.querySelector('#grid')
const userInputs = document.getElementById('user-inputs')

const popup = document.createElement('p')
userInputs.appendChild(popup)
popup.innerHTML = ''

let userSize = document.getElementById('user-size');
let userSubmit = document.getElementById('sub-btn');
userSubmit.addEventListener('click', makeGrid);
userSubmit.addEventListener('click', colorMe);



function makeGrid() {
    let number = userSize.value;
    grid.innerHTML = ''
    if (number <= 0 || number > 99){
        popup.innerHTML = 'Enter a number greater than 0 and less than 99'
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
            event.target.style.backgroundColor = 'purple'
        })
    })
}