let button = document.querySelector('button');
let success = document.querySelector('.success')

button.addEventListener('click',
(e) => {
  e.preventDefault();
  const formData = document.querySelector('form');
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.open('POST', '/posts');
  xmlhttp.setRequestHeader('Content-Type', 'application/json');
  let formTitle = formData.elements.title.value;
  let formUrl = formData.elements.url.value;
  if (formTitle !== '' && formUrl !== '') {
    xmlhttp.send(JSON.stringify({
      title: formTitle,
      url: formUrl,
    }));
    success.innerText = 'Post has been successfully submitted'
    setTimeout(() => window.location='http://localhost:3000/posts', 2000)
  }
});
