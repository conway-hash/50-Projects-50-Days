const placeholders = document.querySelectorAll('.load-wraper')

function remove() {
    placeholders.forEach(placeholder => {
        placeholder.classList.remove('load-wraper')
    })
}

window.addEventListener('load', () => {
    setTimeout(remove, 2500)
})