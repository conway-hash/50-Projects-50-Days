const button = document.querySelector('.button')
const boxes = document.querySelectorAll('.box')
const page2 = document.querySelector('#page2')
const page3 = document.querySelector('#page3')
const game_table = document.querySelector('#game-table')
const score = document.querySelector('#score')
const time = document.querySelector('#time')
let points = 0
let sec = 0
let ten_sec = 0
let min = 0
let ten_min = 0

button.addEventListener('click', () => {
    page2.scrollIntoView({behavior: "smooth"}); 
})

boxes.forEach(box => {
    box.addEventListener('click', () => {
        page3.scrollIntoView({behavior: "smooth"})
        source = box.children[1].children[0].src
        setTimeout(() => {cycle(source)},1000)
        timer()
    })
})

function cycle(source) {
    const image = document.createElement('img')
    const image_container = document.createElement('div')

    image.classList.add('image')
    image.src = source
    image_container.appendChild(image)

    image_container.classList.add('image-container-absolute')
    const left = Math.floor(Math.random() * 101);
    image_container.style.left = `${left}%`
    const top = Math.floor(Math.random() * 101);
    image_container.style.top = `${top}%`
    const rotation = Math.floor(Math.random() * 361);
    image_container.style.transform = `scale(1) rotate(${rotation}deg)`
    game_table.appendChild(image_container)

    image_container.addEventListener('click', () => {
        setTimeout(() => {
            image_container.style.transition = 'all 0.3s ease' 
            image_container.style.transform = `scale(0) rotate(${rotation}deg)`
        },100)
        setTimeout(() => {image_container.remove()},400)
        points++
        score.innerHTML = `Score: ${points}`
        if (points === 20) {
            const overlay = document.createElement('div')
            overlay.innerHTML = 'Are you annoyed yet?<br>You are playing an impossible game!!'
            overlay.classList.add('overlay')
            page3.appendChild(overlay)
            setTimeout(() => {overlay.style.top = '210vh'},250)
        }
        setTimeout(() => {cycle(source)},1000)
        setTimeout(() => {cycle(source)},1500)
    })
}

function timer() {
    setTimeout(() => {  
        sec++
        if (sec === 10) {
            ten_sec++
            sec = 0
        }
        if (ten_sec === 6) {
            min++
            ten_sec = 0
        }
        if (min === 10) {
            ten_min++
            min = 0
        }
        time.innerHTML = `Time: ${ten_min}${min}:${ten_sec}${sec}`
        timer()
    },1000)    
}