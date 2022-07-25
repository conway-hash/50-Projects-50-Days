const p = document.querySelector('p')
const button = document.querySelector('input')
async function click() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }
    const res = await fetch('https://icanhazdadjoke.com', config)
    const data = await res.json()
    const joke = data.joke
    p.innerHTML = joke
}

click()

button.addEventListener('click', () => click());