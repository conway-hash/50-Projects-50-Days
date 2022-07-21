const button = document.getElementById('button');
const bar = document.getElementById('bar');

button.addEventListener("click", () => {
    bar.classList.toggle('wider')
    bar.focus()
});