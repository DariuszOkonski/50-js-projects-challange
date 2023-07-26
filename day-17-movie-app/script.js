const API_URL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=837f0db187c4a7cf9ceefc157b184b50&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=837f0db187c4a7cf9ceefc157b184b50&query="';

const form = document.getElementById('form');
const search = document.getElementById('search');
const container = document.getElementById('container');

getMovies(API_URL);

async function getMovies(url) {
  const result = await fetch(url);
  const data = await result.json();
  placeMovies(data.results);
}

function displayScoreResult(score) {
  return score.toFixed(1);
}

function displayScoreColor(score) {
  if (score >= 8) {
    return 'green';
  } else if (score >= 6.2) {
    return 'orange';
  } else {
    return 'red';
  }
}

function placeMovies(movies) {
  container.innerHTML = '';
  movies.forEach((movie) => {
    const { original_title, vote_average, poster_path, overview } = movie;

    const picture = document.createElement('div');
    picture.classList.add('picture');
    picture.innerHTML = `
      <img src="${
        IMG_PATH + poster_path
      }" alt="${original_title}" class="image" />
      <div class="description">
        <h3>${original_title}</h3>
        <span class="${displayScoreColor(vote_average)}">${displayScoreResult(
      vote_average
    )}</span>
      </div>
      <div class="info">
        <h3>Overview</h3>
        <p>${overview}</p>
      </div>
    `;
    container.appendChild(picture);
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  getMovies(SEARCH_API + search.value);
  search.value = '';
});
