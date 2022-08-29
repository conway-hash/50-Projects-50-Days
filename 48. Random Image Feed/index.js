const container = document.querySelector('#container')

for (let i = 0; i < 15; i++) {
    const div = document.createElement('div')
    div.classList.add('card')
    getImages(div)
    container.appendChild(div)
}

async function getImages(card) {
    const picture = await fetch('https://picsum.photos/300/300')
    card.innerHTML = `<img src="${picture.url}"> `
}