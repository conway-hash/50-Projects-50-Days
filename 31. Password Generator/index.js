const uppersStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowersStr = 'abcdefghijklmnopqrstuvwxyz';
const numbersStr = '0123456789';
const symbolsStr = '~`!@#$%^&*()_-+={[}]|\:;"<,>.?/';
let inputStr = '';
let outputStr = '';

const button = document.querySelector('#button');
const output = document.querySelector('#output');
const copy = document.querySelector('#copy');

button.addEventListener('click', () => {
    const length = document.querySelector('#length').value;
    const markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
    output.innerHTML = '';

    markedCheckbox.forEach(box => {
        const id = box.id;
        if (id === 'uppers') {
            inputStr = inputStr.concat(uppersStr);
        };
        if (id === 'lowers') {
            inputStr = inputStr.concat(lowersStr);
        };
        if (id === 'numbers') {
            inputStr = inputStr.concat(numbersStr);
        };
        if (id === 'symbols') {
            inputStr = inputStr.concat(symbolsStr);
        };
    });

    for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random() * inputStr.length);
        outputStr = outputStr.concat(inputStr[random]);
    };

    output.value = outputStr;

    inputStr = '';
    outputStr = '';
});

copy.addEventListener('click', () => {
    /* Select the text field */
    output.select();
    output.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(output.value);
    alert('Password copied to clipboard!');
})