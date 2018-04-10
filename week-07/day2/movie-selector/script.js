
const genresSelect = document.querySelector('select[name="genre"]');
const movieSelect = document.querySelector('select[name="movie"]');
const genresOptions = document.querySelectorAll('select[name="genre"] option')
const moviesOptions = document.querySelectorAll('select[name="movie"] option')
let selectedGenre = genresSelect.options[genresSelect.selectedIndex].text;
let selectedMovie = movieSelect.options[movieSelect.selectedIndex].text;
// const button1 = document.querySelector('#button1');
// const button2 = document.querySelector('#button2');
const select1 = document.querySelector('#select1');
const select2 = document.querySelector('#select2');
const h2 = document.querySelector('h2');

// let selectGenre = genre => {
//
// }


let selectGenre = () => {
  //button2.disabled = false;
  if (genresSelect.options[genresSelect.selectedIndex].text === 'Sci-fi') {
    for (let i = 0; i < movieSelect.length; i++) {
        moviesOptions[i].classList.remove('disabled');
        if (!moviesOptions[i].classList.contains('scifi')) {
          moviesOptions[i].classList.add('disabled');
        }
      }
    }
  if (genresSelect.options[genresSelect.selectedIndex].text === 'Drama') {
    for (let i = 0; i < movieSelect.length; i++) {
      moviesOptions[i].classList.remove('disabled');
        if (!moviesOptions[i].classList.contains('drama')) {
          moviesOptions[i].classList.add('disabled');
        }
      }
    }
  if (genresSelect.options[genresSelect.selectedIndex].text === 'Comedy') {
    for (let i = 0; i < movieSelect.length; i++) {
      moviesOptions[i].classList.remove('disabled');
        if (!moviesOptions[i].classList.contains('comedy')) {
          moviesOptions[i].classList.add('disabled');
      }
    }
  }
}

let selectMovie = () => {
  selectedMovie = movieSelect.options[movieSelect.selectedIndex].text;
  if (movieSelect.options[movieSelect.selectedIndex].text != '---Please, select a movie!---') {
    h2.innerText = `You have selected: ${selectedMovie  }`;
  }
}

//button1.addEventListener('click', selectGenre);
select1.addEventListener('change', selectGenre);
//button2.addEventListener('click', selectMovie);
select2.addEventListener('change', selectMovie);

genresOptions[1].addEventListener('change', selectGenre);
