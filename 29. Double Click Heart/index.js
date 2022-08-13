const image = document.querySelector('#image');
const count = document.querySelector('#count-int');
let n = 0;

image.addEventListener('dblclick', function (e) {
    let fade = document.createElement('span');
    fade.style.left = e.clientX - 12 + 'px'
    fade.style.top = e.clientY - 12 + 'px'
    console.log(fade.style.left, fade.style.top);
    this.appendChild(fade);
    setTimeout(() => {
        fade.remove()
    }, 450);
    n++
    count.innerHTML = n;
})