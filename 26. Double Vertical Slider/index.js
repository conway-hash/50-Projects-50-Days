const buttonDown = document.querySelector('#b1');
const buttonUp = document.querySelector('#b2');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
let i = 0;

buttonUp.addEventListener('click', () => {
    if (i !== 300) {
        i = i + 100
        right.style.top = 0 - i + 'vh';
        left.style.top = -300 + i + 'vh';
    } else {
        i = 0
        right.style.top = 0 + 'vh';
        left.style.top = -300 + 'vh';
    }
})

buttonDown.addEventListener('click', () => {
    if (i !== 0) {
        i = i - 100
        right.style.top = 0 - i + 'vh';
        left.style.top = -300 + i + 'vh';
    } else {
        i = 300
        right.style.top = -300 + 'vh';
        left.style.top = 0 + 'vh';
    }
})