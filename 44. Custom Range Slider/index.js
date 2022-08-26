const range = document.querySelector('#range')
const input = document.querySelector('input')

input.addEventListener('input', () => {
    let value = input.value
    if (value < 50) {
        range.style.transform = `translate(${(value - 50)*2.5}px)`
    } else {
        range.style.transform = `translate(${(value - 50)*2.5}px)`
    }
    range.innerHTML = value
})