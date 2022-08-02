const days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
const dysInner = document.querySelector('.inner')
const dysOuter = document.querySelector('.outer')
const dysTime = document.querySelector('.time')

const hour = document.querySelector('.hour')
const minute = document.querySelector('.minute')
const second = document.querySelector('.second')

const button = document.querySelector('button')

button.addEventListener('click', () => {
    document.body.classList.toggle("dark-body");
    button.classList.toggle("dark-but");
    document.querySelector('.hour').classList.toggle("dark-bg");
    document.querySelector('.minute').classList.toggle("dark-bg");
    document.querySelector('.dot').classList.toggle("dark-bg");
    document.querySelector('.inner').classList.toggle("dark-bg");
});

function update() {
    const today = new Date();
    dysInner.textContent = today.getDay();
    dysOuter.textContent = `${days[today.getDay()]}, ${months[today.getMonth()]}`;
    dysTime.textContent = today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });;

    hour.style.transform = `rotate(${today.getHours() * (360 / 12)}deg)`;
    minute.style.transform = `rotate(${today.getMinutes() * (360 / 60)}deg)`;
    second.style.transform = `rotate(${today.getSeconds() * (360 / 60)}deg)`;
    setTimeout(update, 1000);
};

update();