const picks = document.querySelectorAll('.pick')

picks.forEach(pick => {
    pick.addEventListener('click', () => {
        picks.forEach(pick => {pick.classList.remove('active')})
        pick.classList.add('active')
    })
})

const button = document.querySelector('input')

button.addEventListener('click', () => {
    const active = document.querySelector('.active').innerHTML
    const container = document.querySelector('#container')
    container.innerHTML = ''

    const e1 = document.createElement('div')
    e1.innerHTML = '♥<br>Thank You!'
    const e2 = document.createElement('h4')
    e2.innerHTML = `Feedback: ${active}`
    const e3 = document.createElement('p')
    e3.innerHTML = "We'll use your feedback to improve our customer support"

    container.style.gap = '1rem'
    container.append(e1,e2,e3)
})