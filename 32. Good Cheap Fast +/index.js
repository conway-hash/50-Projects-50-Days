const good = document.querySelector('#good');
const cheap = document.querySelector('#cheap');
const fast = document.querySelector('#fast');

good.addEventListener('click', () => {
    good.classList.toggle('active-outer')
    if (good.className === 'color active-outer') {
        good.firstElementChild.style.transform = 'translateX(2.9rem)';
    } else {
        good.firstElementChild.style.transform = '';
    }
});

cheap.addEventListener('click', () => {
    cheap.classList.toggle('active-outer')
    if (cheap.className === 'color active-outer') {
        cheap.firstElementChild.style.transform = 'translateX(2.9rem)';
    } else {
        cheap.firstElementChild.style.transform = '';
    }
});

fast.addEventListener('click', () => {
    fast.classList.toggle('active-outer')
    if (fast.className === 'color active-outer') {
        fast.firstElementChild.style.transform = 'translateX(2.9rem)';
    } else {
        fast.firstElementChild.style.transform = '';
    }
});
