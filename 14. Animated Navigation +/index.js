const button = document.querySelector('.material-symbols-outlined')
const spans = document.querySelectorAll('span')
const inner = document.querySelector('.inner')
const nav = document.querySelector('nav')

button.addEventListener('click', myFunction)

function myFunction() {

    if (button.className === 'material-symbols-outlined active') {
        button.classList.remove('active')
        nav.classList.remove('small')
        spans.forEach(span => {
            span.classList.remove('none')
        })
    } else {
        button.classList.add('active')
        nav.classList.add('small')
        spans.forEach(span => {
            span.classList.add('none')
        })
    }
}