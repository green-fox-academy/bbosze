
let lastPcontent = document.querySelector('.animals').innerHTML;
let pContents = document.querySelectorAll('p');


// for (let i = 0; i < pContents.length; i++) {
//   pContents[i].innerHTML = lastPcontent;
// }

pContents.forEach(item => {
  item.innerHTML = lastPcontent;
});
