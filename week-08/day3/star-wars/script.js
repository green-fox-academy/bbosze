let xhr = new XMLHttpRequest();
let button = document.querySelector('button');
let films = [];
let movies = [];


function getCharacter() {
    xhr.open('GET', `https://swapi.co/api/people`);
    let inputText = document.getElementById('myInput').value;
    document.querySelector('p').innerText = 'No match :(';
    xhr.onload = () => {
    let characters = JSON.parse(xhr.responseText);
        // console.log(characters.results);
      characters.results.forEach((e) => {
      if (e.name === inputText) {
        document.querySelector('p').innerText = e.name;
        console.log(e.name);
        films = e.films
        // console.log(films);
      }
    }
  )};
    xhr.send();
}
function getMovie() {
  films.forEach((e) => {
    xhr.open('GET', e);
    xhr.onload = () => {
    movie = (JSON.parse(xhr.responseText));
    movies.push(movie);
    console.log(movies);
    }


    }
  )
      xhr.send();
}

button.addEventListener('click', getMovie);



// movie.title
// if (e.name.indexOf(inputText) > 0) {
//   console.log(e.name);
// }

//
//
// button.addEventListener('click', (e) => {
//   e.preventDefault();
//   getCharacter();
// });
