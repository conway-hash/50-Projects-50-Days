let i = 0

function next() {
    i++
    const dots = document.getElementsByClassName('dot');
    const next = document.getElementById('next');
    const prev = document.getElementById('prev');
    dots[i].classList.add('active');
    if (i !== 0) {
        prev.removeAttribute('disabled')
    };
    if (i === 3) {
        next.setAttribute('disabled', '')
    };
    const progress = document.getElementById('progress');
    progress.style.width = (i * 88) + "px";
};

function prev() {

    const dots = document.getElementsByClassName('dot')
    const next = document.getElementById('next')
    const prev = document.getElementById('prev')
    dots[i].classList.remove('active')
    i--
    if (i !== 3) {
        next.removeAttribute('disabled')
    }
    if (i === 0) {
        prev.setAttribute('disabled', '')
    }
    const progress = document.getElementById('progress');
    progress.style.width = (i * 88) + "px";
}