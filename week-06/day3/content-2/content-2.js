let contentList = ['apple', 'banana', 'cat', 'dog'];

let placeholders = document.querySelectorAll('li')

console.log(placeholders);

for (i = 0; i < placeholders.length; i++) {
  placeholders[i].innerHTML = contentList[i]
}
