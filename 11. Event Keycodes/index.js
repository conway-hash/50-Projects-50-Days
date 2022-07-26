const container = document.querySelector('.container');
let value = '';
let text = '';

addEventListener('keydown', logKey);

function logKey(e) {
    container.innerHTML = ""
    for (let i = 0; i < 3; i++) {
        /* logic for name and insides of a div*/
        if (i === 0) {
            value = e.key
            text = 'event.key'
        };
        if (i === 1) {
            value = e.keyCode
            text = 'event.keyCode'
        };
        if (i === 2) {
            value = e.code
            text = 'event.code'
        };
        if (value === ' ') {
            value = 'Space'
        };

        /*adds label and div*/
        const main = document.createElement('div');
        /*names*/
        const label = document.createElement('div');
        const labelText = document.createTextNode(text);

        label.classList.add('text');
        label.appendChild(labelText);
        main.appendChild(label);
        /*insides*/
        const div = document.createElement('div');
        const divText = document.createTextNode(value);

        div.classList.add('active', 'base');
        div.appendChild(divText);
        main.appendChild(div);
        /*makes conetent visible*/
        main.style.margin = '0rem 0.5rem'
        container.appendChild(main);
    }
};