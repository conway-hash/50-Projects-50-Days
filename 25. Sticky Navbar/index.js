const navbar = document.querySelector('.nav')
const body = document.body

console.log(body.scrollTop)

body.addEventListener("scroll", () => {
    console.log(body.scrollTop)
    if (body.scrollTop >= 100) {
        navbar.styles.background = 'white';
        navbar.styles.color = 'black';
        navbar.styles.height = '3rem';
    }
});
