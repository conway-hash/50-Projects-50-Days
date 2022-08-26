const header = document.querySelector('h2')
const inputs = document.querySelectorAll('.answer-input')
const labels = document.querySelectorAll('.answer-label')

const q2 = ['Central Style Sheets','Cascading Style Sheets','Cascading Simple Sheets','Cars SUVs Sailboats']
const h2 = 'What does CSS stand for?'
const q3 = ['Hypertext Markup<br>Language','Hypertext Markdown<br>LLanguage','Hyperloop Machine<br>LLanguage','Helicopters Terminals<br>Motorboats Lamborginis']
const h3 = 'What does HTML stand for?'
const q4 = ['1996','1995','1994','none of the above']
const h4 = 'What year was JavaScript launched?'

const button = document.querySelector('#button')
let question = 1
let points = 0

button.addEventListener('click', () => {
    if (question == 1) {
        if (document.querySelector('input[type="radio"]:checked').value == 'JavaScript') {
            points++
        }
        header.innerHTML = h2
        for (let i = 0; i < 4; i++) {
            inputs[i].checked = false
            inputs[i].value = q2[i]
            labels[i].innerHTML = q2[i]
        }
        question++
    } else if (question == 2) {
        if (document.querySelector('input[type="radio"]:checked').value == 'Cascading Style Sheets') {
            points++
        }
        header.innerHTML = h3
        for (let i = 0; i < 4; i++) {
            inputs[i].checked = false
            inputs[i].value = q3[i]
            labels[i].innerHTML = q3[i]
        }
        question++
    } else if (question == 3) {
        if (document.querySelector('input[type="radio"]:checked').value == 'Hypertext Markup Language') {
            points++
        }
        header.innerHTML = h4
        for (let i = 0; i < 4; i++) {
            inputs[i].checked = false
            inputs[i].value = q4[i]
            labels[i].innerHTML = q4[i]
        }
        question++
    } else if (question == 4) {
        if (document.querySelector('input[type="radio"]:checked').value == '1995') {
            points++
        }
        const input_container = document.querySelector('#inputs')
        input_container.remove()
        header.innerHTML = `You answered ${points}/4 questions correctly`
        button.value = 'Reload'
        button.addEventListener('click', () => {
            window.location.reload()
        })
    }
})