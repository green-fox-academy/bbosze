let gifContainer = document.querySelector('.gifcontainer');

let xhr = new XMLHttpRequest();
xhr.open('GET', `http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YW3q0yG6WTxtLnJYkBWWjfVQb857azJB&limit=16`);
xhr.onload = () => {
  let dataFromGiphy = JSON.parse(xhr.responseText);
  dataFromGiphy.data.forEach( e => {
    let newPic = document.createElement('img');
    gifContainer.appendChild(newPic);
    newPic.src = e.images.downsized_still.url
    let imgs = document.querySelectorAll('img');
    imgs.forEach((e, i )=> {
      e.addEventListener('click', () => {
      e.src = dataFromGiphy.data[i].images.original.url
      })

    })
  })
};
xhr.send();
