const hs = document.querySelectorAll('h1')
const a = [12001, 5001, 7501]
const time = [0.2 / 2.4, 0.2 / 1, 0.2 / 1.5]

hs.forEach(h1 => {
    let n = h1.getAttribute('id')
    for (let i = 0; i < a[n]; i++) {
        setTimeout(() => {
            h1.textContent = i;
        }, i * time[n]);
    };
})