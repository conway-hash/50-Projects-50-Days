const button = document.querySelector('#new-note');
const container = document.querySelector('#container');

button.addEventListener('click', () => {
    const card = document.createElement('div')

    const up = document.createElement('div')
    up.classList.add('up')

    const a = document.createElement('i')
    a.classList.add('fas','fa-trash')
    a.addEventListener('click', () => {
        a.parentElement.parentElement.remove()
        console.log(document.cookie)
        document.cookie = "cookiename=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    })

    const b = document.createElement('i')
    b.classList.add('fas','fa-pen-square')
    up.append(a,b)  

    const down = document.createElement('div')
    down.classList.add('down')

    let textArea = document.createElement('textarea')
    textArea.classList.add('text')

    b.addEventListener('click', () => {
        if (down.className !== 'down disabled') {
            down.textContent = textArea.value
            textArea.remove()
            down.classList.add('disabled')
        } else {
            textArea = document.createElement('textarea')
            textArea.classList.add('text')
            textArea.value = down.textContent
            down.textContent = ''
            down.classList.remove('disabled')
            down.append(textArea)
            textArea.addEventListener('input', () => {
                document.cookie = "cookiename=" + textArea.value + "; expires= Thu, 21 Aug 2033 20:00:00 UTC; path=/;"
                console.log(document.cookie)
            })
        };
    })

    textArea.addEventListener('input', () => {
        document.cookie = "cookiename=" + textArea.value + "; expires= Thu, 21 Aug 2033 20:00:00 UTC; path=/;"
        console.log(document.cookie)
    })

    down.append(textArea)

    card.append(up,down)
    container.appendChild(card)
});

window.addEventListener('load', () => {
    if (document.cookie !== '') {
        console.log(document.cookie)
        const card = document.createElement('div')

        const up = document.createElement('div')
        up.classList.add('up')

        const a = document.createElement('i')
        a.classList.add('fas','fa-trash')
        a.addEventListener('click', () => {
            a.parentElement.parentElement.remove()
            console.log(document.cookie)
            document.cookie = "cookiename=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
            console.log(document.cookie)
        })

        const b = document.createElement('i')
        b.classList.add('fas','fa-pen-square')
        up.append(a,b)  

        const down = document.createElement('div')
        down.classList.add('down')

        let textArea = document.createElement('textarea')
        textArea.classList.add('text')
        textArea.value = document.cookie

        b.addEventListener('click', () => {
            if (down.className !== 'down disabled') {
                down.textContent = textArea.value
                textArea.remove()
                down.classList.add('disabled')
            } else {
                textArea = document.createElement('textarea')
                textArea.classList.add('text')
                textArea.value = down.textContent
                down.textContent = ''
                down.classList.remove('disabled')
                down.append(textArea)
                textArea.addEventListener('input', () => {
                    document.cookie = "cookiename=" + textArea.value + "; expires= Thu, 21 Aug 2033 20:00:00 UTC; path=/;"
                    console.log(document.cookie)
                })
            };
        })
        
        textArea.addEventListener('input', () => {
            document.cookie = "cookiename=" + textArea.value + "; expires= Thu, 21 Aug 2033 20:00:00 UTC; path=/;"
            console.log(document.cookie)
        })

        down.append(textArea)

        card.append(up,down)
        container.appendChild(card)
    }
})