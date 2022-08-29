const down = document.getElementById('down')
const search = document.getElementById('search')
const listItems = []

getData()

search.addEventListener('input', (e) => filterData(e.target.value))

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50')

    const {results} = await res.json()

    down.innerHTML = ''

    results.forEach(profile => {
        const user = document.createElement('div')
        user.classList.add('user')
        
        listItems.push(user)

        user.innerHTML = `
            <div class="avatar"><img src="${profile.picture.large}" alt="${profile.name.first}"></div>
            <div class="info">
                <div class="name">${profile.name.first} ${profile.name.last}</div>
                <div class="location">${profile.location.city}, ${profile.location.country}</div>
            </div>
        `

        down.appendChild(user)
    })
}

function filterData(searchTerm) {
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}
