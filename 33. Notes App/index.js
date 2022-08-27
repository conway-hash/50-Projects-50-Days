const button = document.querySelector('#new-note');
const container = document.querySelector('#container');
const saved_notes = JSON.parse(localStorage.getItem('notes'));

if(saved_notes) {
    saved_notes.forEach(saved_note => {
        let down = create()
        down.classList.add('disabled')
        down.textContent = saved_note.text
    })
}

button.addEventListener('click', () => {
    create()
    update()
});

function create() {
    const card = document.createElement('div')
    card.classList.add('card')

    const up = document.createElement('div')
    up.classList.add('up')

    const a = document.createElement('i')
    a.classList.add('fas','fa-trash')
    a.addEventListener('click', () => {
        a.parentElement.parentElement.remove()
        update()
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
                update()
            })
        };
    })

    textArea.addEventListener('input', () => {
        update()
    })

    down.append(textArea)

    card.append(up,down)
    container.appendChild(card)
    return down
}

function update() {
    notes_all = document.querySelectorAll('.card')

    const notes_array = []

    notes_all.forEach(note => {
        if (note.lastElementChild.classList.contains('disabled')) {
            notes_array.push({
                text: note.children[1].innerText,
            })
        } else {
            notes_array.push({
                text: note.children[1].children[0].value,
            })
        }
    })

    localStorage.setItem('notes', JSON.stringify(notes_array))
}