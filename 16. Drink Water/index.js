const cards = document.querySelectorAll('.card')
const remaining = document.querySelector('.remaining')
const done = document.querySelector('.done')
done.style.transition = "all 0.5s";
remaining.style.transition = "all 0.5s";

function heightCheck() {
    if (done.style.height == 0 + '%') {
        done.firstElementChild.textContent = ''
    }
}

function repeat(height) {
    let percentage = height * 12.5
    let liters = 2 - 2 / 8 * height
    done.firstElementChild.textContent = percentage + '%'
    done.style.height = percentage + '%'
    remaining.firstElementChild.textContent = liters + 'L'
    remaining.style.height = 100 - percentage + '%'
}

heightCheck()

cards.forEach(card => {
    card.addEventListener('click', () => {
        if (card.className === 'card') {
            let id = Number(card.id)
            let height = Number(id) + 1
            repeat(height)

            card.style.transition = "all 0.5s";
            card.classList.add('active')

            while (id !== -1) {
                cards[id].classList.add('active')
                cards[id].style.transition = "all 0.5s";
                id--
            }
            heightCheck()
        } else {
            let id = Number(card.id)
            let height = Number(id)
            repeat(height)

            while (id !== 8) {
                cards[id].classList.remove('active')
                id++
            }
            heightCheck()
        }
    })
});