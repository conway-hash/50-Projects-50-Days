const bg = document.getElementById('blur')
const n = document.getElementById('countdown')


for (let i = 0; i < 101; i++) {
    loop(i);
};


function loop(i) {
    setTimeout(function () {
        n.innerText = `${i}%`;
        n.style.opacity = (100 - i) / 100;
        bg.style.filter = `blur(${100 - i}px)`;
    }, 30 * i);
}
