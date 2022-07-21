const settings = document.getElementById('settings');
const exit = document.getElementById('exit');
const base = document.getElementById('base');
const nav = document.getElementById('nav');
const cards = document.querySelectorAll('.first,.second,.third');

settings.addEventListener("click", function () {
    base.classList.add('turn');
    nav.classList.add('turn2');
    Array.from(cards).forEach(card => {
        card.classList.add('move')
        const value = window.getComputedStyle(card, null).getPropertyValue("left");
        card.style.left = (parseInt(value.replace(/px/, "")) + 288) + "px";
    })
});

exit.addEventListener("click", function () {
    base.classList.remove('turn');
    nav.classList.remove('turn2');
    Array.from(cards).forEach(card => {
        card.classList.remove('move')
        const value = window.getComputedStyle(card, null).getPropertyValue("left");
        card.style.left = (parseInt(value.replace(/px/, "")) - 288) + "px";
    })
});