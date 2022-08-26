const burger = document.querySelector('#burger')
const close = document.querySelector('#close')
const colors = document.querySelectorAll('.color')

burger.addEventListener('click', () => {
    colors.forEach(function(color,index) {
        setTimeout( () => {color.style.transform = 'translateX(0rem)'},200 * index)
    })
})

close.addEventListener('click', () => {
    colors[2].style.transform = 'translateX(-20rem)'
    setTimeout( () => {
        colors[1].style.transform = 'translateX(-20rem)'
        setTimeout( () => {colors[0].style.transform = 'translateX(-20rem)'},200)
    },200)
})