
let input = document.querySelectorAll('.favouritepet');
let input2 = document.querySelectorAll('.question');
let button1 = document.querySelector('#signup')
let button2 = document.querySelector('#cats')

function enableSignup() {
button1.disabled = false;
}

function enableCats() {
button2.disabled = false;
}
function disableCats() {
button2.disabled = true;
}


input.forEach(item => item.addEventListener('click', enableSignup));
input2[0].addEventListener('click', enableCats);
input2[1].addEventListener('click', disableCats);

let alert1 = () => alert(`Thank you, you've successfully signed up for cat facts
`);
let alert2 = () => alert(`Sigh, we still added you to the cat facts list`);

button1.addEventListener('click', alert1)
button2.addEventListener('click', alert2)
