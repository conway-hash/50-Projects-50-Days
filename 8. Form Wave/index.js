
const inputs = document.querySelectorAll('input');

const labels = document.querySelectorAll('.label');
const arr0 = Array.from(labels[0].children)
const arr1 = Array.from(labels[1].children)


inputs[0].addEventListener('focus', () => {
    inputs[0].classList.add('border')
    arr0.forEach((span, i) => {
        setTimeout(() => span.classList.remove('animation'), 50 * i);
    })
}
);

inputs[0].addEventListener('blur', () => {
    const val = inputs[0].value
    if (val !== '') {
    } else {
        inputs[0].classList.remove('border')
        arr0.forEach((span, i) => {
            setTimeout(() => span.classList.add('animation'), 50 * i);
        })
    }
}
);

inputs[1].addEventListener('focus', () => {
    inputs[1].classList.add('border')
    arr1.forEach((span, i) => {
        setTimeout(() => span.classList.remove('animation'), 50 * i);
    })
}
);

inputs[1].addEventListener('blur', () => {
    const val = inputs[1].value
    if (val !== '') {
    } else {
        inputs[1].classList.remove('border')
        arr1.forEach((span, i) => {
            setTimeout(() => span.classList.add('animation'), 50 * i);
        })
    }
}
);
