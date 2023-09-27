const grid = document.querySelector('#grid')

const submitButton = document.getElementById('sub-btn')
const userSize = document.getElementById('user-size')
submitButton.addEventListener('click', makeGrid)
submitButton.addEventListener('click', colorMe)


function makeGrid() {
    let number = userSize.value;
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


function colorMe() {
    const columns = document.querySelectorAll('.column')

    columns.forEach((column) => {
    column.addEventListener('mouseenter', (event) => {
        event.target.style.backgroundColor = 'purple'
    })
})
}
