const h1 = document.querySelector('h1');
const num = document.querySelector('input');
const text = 'We love Programming!';
let speed = 250 / 1;
let i = 0;

write()

function write() {
    h1.innerText = text.slice(0, i)
    i++
    if (i > text.length) {
        i = 1
    }
    setTimeout(write, speed)
}

num.addEventListener('input', (e) => speed = 300 / e.target.value)