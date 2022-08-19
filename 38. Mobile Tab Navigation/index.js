const images = document.querySelectorAll('.content')
const buttons = document.querySelectorAll('.part')

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {

        buttons.forEach(button => {
            button.classList.remove('active')
        })
        button.classList.add('active')

        images.forEach(image => {
            image.classList.remove('show')
        })
        images[index].classList.add('show')
    })
})