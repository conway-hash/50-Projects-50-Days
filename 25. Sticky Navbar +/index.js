const navbar = document.querySelector('.nav')
let i = 0;

document.addEventListener("scroll", () => {
    console.log(i)
    i++
    if (i > 50) {
        navbar.classList.add('active');
    }
    if (i < 50) {
        navbar.classList.remove('active');
    }
});
