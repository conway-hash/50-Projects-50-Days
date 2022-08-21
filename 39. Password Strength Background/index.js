const input = document.querySelector('#password')
const background = document.querySelector('#background')

input.addEventListener('input', () => {
    index = input.value.length
    let blur = 20 - (index * 2)
    background.style.filter = `blur(${blur}px)`
})