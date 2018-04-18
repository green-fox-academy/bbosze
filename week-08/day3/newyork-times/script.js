let article = document.querySelector('article');


let xhr = new XMLHttpRequest();
xhr.open('GET', `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=948c2dad2ec84c1dabdf9ef298c47fab&q=apollo&fq=moon
`);
xhr.onload = () => {
  let dataFromNyt = JSON.parse(xhr.responseText);
  dataFromNyt.response.docs.forEach((e) => {
    let container = document.createElement('div');
    article.appendChild(container);
    let newH1 = document.createElement('h1');
    container.appendChild(newH1);
    newH1.textContent = e.headline.main
    let newP = document.createElement('p');
    container.appendChild(newP);
    newP.textContent = e.snippet
    if (e.pub_date !== undefined) {
      let newDate = document.createElement('p');
      container.appendChild(newDate);
      e.pub_date = e.pub_date.substring(0, 16).replace('T', ' ')
      newDate.textContent = e.pub_date;
    }
    let newA = document.createElement('a');
    container.appendChild(newA);
    newA.textContent = 'Read full article'
    newA.href = e.web_url
  })
};
xhr.send();
