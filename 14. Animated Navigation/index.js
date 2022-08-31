const hrefs = document.querySelectorAll('a')
const inner = document.querySelector('.inner')
const outer = document.querySelector('.outer')
const x = document.querySelector('.x')
const hrs = document.querySelectorAll('hr')

x.addEventListener('click', myFunction)

function myFunction() {
    if (x.className.includes('active-x')) {
        outer.style = ""
        hrefs.forEach(href => {
            href.style.transform = ""
        })
        inner.classList.remove('active-inner')
        x.classList.remove('active-x')
        hrs[0].classList.add('tbo')
        hrs[1].classList.add('bb')
        setTimeout(() => {
            hrs[0].className = ''
            hrs[1].className = ''
        }, 800);
    } else {
        outer.style.width = "70px"
        hrefs.forEach(href => {
            href.style.transform = "rotateY(360deg)"
        })
        inner.classList.add('active-inner')
        x.classList.add('active-x')
        hrs[0].classList.add('tf')
        hrs[1].classList.add('bf')
    }
}
