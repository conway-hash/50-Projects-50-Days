const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const container = document.querySelector('#container')
const input = document.querySelector('#input')

getMovies(API_URL)

async function getMovies(url) {
    const results = await fetch(url)
    const data = await results.json()
    showMovies(data.results)
}

function showMovies(movies) {
    container.innerHTML = ''
    movies.forEach(movie => {
        const card = document.createElement('div')
        card.classList.add('card')
        if (movie.vote_average < 5) {
            color = 'red'
        } else if (movie.vote_average < 8) {
            color = 'orange'
        } else {
            color = 'lime'
        }
        card.innerHTML = `
            <div class="img"><img src="${IMG_PATH + movie.poster_path}"</div>
            <div class="inner">
                <h3>${movie.title}</h3>
                <div class="rating"><span style="color:${color};">${movie.vote_average}</span></div>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${movie.overview}
            </div>
        `
        container.appendChild(card)
    });
}

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        if (input.value !== '') {
            getMovies(SEARCH_API + input.value)
        } else {
            getMovies(API_URL)
        }
    }
});