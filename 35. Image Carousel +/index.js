const carousel = document.querySelector('#container')
const moving = document.querySelector('#moving')

const prev = document.querySelector('#prev')
const next = document.querySelector('#next')

let i = 0

prev.addEventListener('click', () => {
    if (i !== 0) {
        i += 32
        moving.style.transform = 'translate(' + i + 'rem)'
    } else {
        i = -96
        moving.style.transform = 'translate(' + i + 'rem)'
    }
})

next.addEventListener('click', () => {
    if (i !== -96) {
        i -= 32
        moving.style.transform = 'translate(' + i + 'rem)'
    } else {
        i = 0
        moving.style.transform = 'translate(' + i + 'rem)'
    }
})

function loop() {
    setTimeout(() => {
        if (i === -96) {
            i = 0
            console.log(i)
            moving.style.transform = 'translate(' + i + 'rem)'
            loop()
        } else {
            i -= 32
            console.log(i)
            moving.style.transform = 'translate(' + i + 'rem)'
            loop()
        }
    }, 2000);
}

loop()