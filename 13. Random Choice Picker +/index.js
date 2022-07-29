const input = document.querySelector('input')
const div = document.querySelector('div')
let span = document.createElement('span');
let text = ''
input.addEventListener('keyup', update)

function update(event) {
    if (event.keyCode === 188) {
        span = document.createElement('span');
        text = ''
    }

    if (event.keyCode >= 65 && event.keyCode <= 90) {
        text = String(text + event.key)
        inside = document.createTextNode(event.key);
        span.classList.add('choice');
        console.log(span, text)
        span.appendChild(inside);
        div.appendChild(span);
    }
    if (event.keyCode === 8) {
        text = text.substring(0, text.length - 1)
        span.classList.add('choice')
        span.innerText = text;
    }
}