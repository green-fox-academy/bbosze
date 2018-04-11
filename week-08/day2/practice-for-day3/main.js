let btn = document.querySelector('button');
let animalContainer = document.querySelector('div');
let pageCounter = 1;

btn.addEventListener('click', () => {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', `https://learnwebcode.github.io/json-example/animals-${pageCounter}.json`);
  xhr.onload = () => {
    
    let ourData = JSON.parse(xhr.responseText);
    renderHtml(ourData);
  };
  xhr.send();
  if (pageCounter === 3) {
    btn.classList.add('hide')
  }
});

let htmlString = '';

let renderHtml = (data) => {
  data.forEach(e => {
    htmlString += `<p>${e.name} is a ${e.species}.</p>`
  });
  pageCounter++;
  document.querySelector('div').innerHTML = htmlString;
}
