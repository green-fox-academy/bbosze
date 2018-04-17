let joke = document.querySelector('.joke');
let button = document.querySelector('button');

let url = 'http://api.icndb.com/jokes/random'

button.addEventListener('click', () => {
  fetch(url)
    .then( (response) => response.json())
    .then( (jokes) => {
      joke.innerHTML = jokes.value.joke;
  });
});
