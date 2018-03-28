
let lastPcontent = document.querySelector('.animals').innerHTML;
let pContent = document.querySelectorAll('p');


// for (let i = 0; i < pContent.length; i++) {
//   pContent[i].innerHTML = lastPcontent;
// }

pContent.forEach(lastPcontent => {
  pContent.innerHTML = lastPcontent;
});
