const grid = document.querySelector('#grid')

for (let i = 0; i < 500; i++) {
    console.log(i)
    const box = document.createElement('div')
    const overlay = document.createElement('div')
    box.classList.add('box')
    box.appendChild(overlay)
    grid.appendChild(box) 
}

const boxes = document.querySelectorAll('.box')

boxes.forEach(box => {
    
    box.addEventListener('mouseenter', () => {
        box.lastElementChild.className = 'overlay'
        box.lastElementChild.classList.add('overlay')

        let random = Math.floor(Math.random() * 6) + 1;
        box.lastElementChild.classList.add('color' + random)
    })
    box.addEventListener('mouseleave', () => {
        box.lastElementChild.classList.add('invisible')
    })
})