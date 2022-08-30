const good = document.querySelector('#good');
const cheap = document.querySelector('#cheap');
const fast = document.querySelector('#fast');
let ticked_list = []

good.addEventListener('click', () => {check(good)});

cheap.addEventListener('click', () => {check(cheap)});

fast.addEventListener('click', () => {check(fast)});

function check(type) {
    type.classList.toggle('active-outer')
    if (type.className.includes('active-outer')) {
        type.children[0].classList.add('active-inner-f')
        if (ticked_list.length === 2) {
            ticked_list[0].children[0].classList.add('active-inner-b')
            setTimeout(() => {
                ticked_list[0].children[0].className = 'inner'
                ticked_list.shift()
            },400)
            ticked_list[0].classList.remove('active-outer')
        }
        ticked_list.push(type)
    } else {
        type.children[0].classList.add('active-inner-b')
        setTimeout(() => {type.children[0].className = 'inner'},400)
        ticked_list = ticked_list.filter(function(item) {
            return item !== type
        })
    }
}