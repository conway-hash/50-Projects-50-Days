const button = document.querySelector('#button')
const boxes = document.querySelectorAll('.box')
const grid = document.querySelector('#grid')

button.addEventListener('click', () => {
    if (grid.style.gap !== '1.5rem') {
        grid.style.gap = '1.5rem'
        boxes.forEach(box => {
            box.style.transform = 'rotate(360deg)'
        })
    } else {
        grid.style.gap = '0rem'
        boxes.forEach(box => {
            box.style.transform = 'rotate(0deg)'
        })
    }
})
