const input = document.querySelector('#input')
const container = document.querySelector('#container')
const saved_todos = JSON.parse(localStorage.getItem('todos'))

if(saved_todos) {
    saved_todos.forEach(saved_todo => {
        const todo = document.createElement('div')

        todo.classList.add('todo')
        if(saved_todo.completed) {todo.classList.add('completed')}

        todo.innerHTML = saved_todo.text

        container.appendChild(todo)

        todo.addEventListener('click', () => {
            todo.classList.toggle('completed')
            update()
        })
        todo.addEventListener('contextmenu', (event) => {
            event.preventDefault()
            todo.remove()
            update()
        })
    })
}

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        if (input.value !== '') {
            const todo = document.createElement('div')

            todo.classList.add('todo')
            todo.innerHTML = input.value

            container.appendChild(todo)

            input.value = ''

            todo.addEventListener('click', () => {
                todo.classList.toggle('completed')
                update()
            })
            todo.addEventListener('contextmenu', (event) => {
                event.preventDefault()
                todo.remove()
                update()
            })
        }
        update()
    }
});



function update() {
    todos_all = document.querySelectorAll('.todo')

    const todos_array = []

    todos_all.forEach(todo => {
        todos_array.push({
            text: todo.innerText,
            completed: todo.classList.contains('completed')
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos_array))
}