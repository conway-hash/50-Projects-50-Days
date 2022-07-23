const cards = document.querySelectorAll('.card');

function show() {
    const triggerBottom = window.innerHeight / 5 * 4.1

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top

        if (cardTop < triggerBottom) {
            card.classList.remove('invisible')
        } else {
            card.classList.add('invisible')
        }
    })

}

/* To see content on landing page */
show()
/* To update content every scroll */
window.addEventListener('scroll', show)