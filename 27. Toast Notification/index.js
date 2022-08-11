const button = document.querySelector('input');
const container = document.querySelector('.container');

button.addEventListener('click', () => {
    const colorN = Math.floor(Math.random() * 3);
    const colors = ['red', 'purple', 'green']
    const color = colors[colorN]
    const textN = Math.floor(Math.random() * 4);
    const texts = ['Message One', 'Message Two', 'Message Three', 'Message Four']
    const text = texts[textN]

    const notification = document.createElement('div');
    notification.classList.add('notification');

    notification.style.color = color;
    const NotificationText = document.createTextNode(text);

    notification.appendChild(NotificationText);
    container.appendChild(notification);

    setTimeout(() => {
        container.firstElementChild.remove()
    }, 3500)
})