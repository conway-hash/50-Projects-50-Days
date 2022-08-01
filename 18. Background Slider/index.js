const forward = document.querySelector('#forward')
const back = document.querySelector('#back')
const cards = document.querySelectorAll('.card')
let n = 0

forward.addEventListener('click', () => {
    if (n !== 4) {
        cards[n].classList.remove('active')
        cards[n + 1].classList.add('active')
        n++
    } else {
        cards[n].classList.remove('active')
        cards[0].classList.add('active')
        n = 0
    }
})

back.addEventListener('click', () => {
    if (n !== 0) {
        cards[n].classList.remove('active')
        cards[n - 1].classList.add('active')
        n--
    } else {
        cards[n].classList.remove('active')
        cards[4].classList.add('active')
        n = 4
    }
})