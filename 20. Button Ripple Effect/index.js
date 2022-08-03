const button = document.querySelector('button');
button.addEventListener('click', function (e) {
    let ripple = document.createElement('span');
    ripple.style.left = e.offsetX + 'px'
    ripple.style.top = e.offsetY + 'px'
    this.appendChild(ripple);
    this.setAttribute('disabled', '');
    setTimeout(() => {
        ripple.remove()
        this.removeAttribute('disabled');
    }, 500);
})