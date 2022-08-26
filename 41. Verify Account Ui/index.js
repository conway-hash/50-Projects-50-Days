const inputs = document.querySelectorAll('input')

window.addEventListener('load', () => {
    inputs[0].focus()
})

inputs.forEach(input => {
    input.addEventListener('input', (e) => {
        input.addEventListener('keydown', (event) => {
            const key = event.keyCode || event.charCode
            if (Number(e.target.id) + 1 !== 6 && key != 8) {
                inputs[Number(e.target.id) + 1].focus()
            } 
            if (key == 8) {
                if (Number(e.target.id) - 1 !== -1) {
                    console.log(e.target.id)
                    inputs[Number(e.target.id)-1].focus()
                }
            } 
        })
        

        
    })
})

/*
if (e.target.value.length == 2) {
    e.target.value = e.target.value[1]
    console.log(e.target.value)
}

if (e.target.value !== '') {
    input.classList.add('active')
} else {
    input.classList.remove('active')
}
*/