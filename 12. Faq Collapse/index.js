const cards = document.querySelectorAll('.card')
const symbols = document.querySelectorAll('i')
const texts = document.querySelectorAll('.pop')

function reply_click(clicked_id) {
    if (cards[clicked_id].className === 'card') {
        cards[clicked_id].classList.add('active');
        symbols[clicked_id].innerHTML = 'close';
        texts[clicked_id].classList.remove('hidden');
    } else {
        cards[clicked_id].classList.remove('active');
        symbols[clicked_id].innerHTML = 'expand_more';
        texts[clicked_id].classList.add('hidden');
    }
}