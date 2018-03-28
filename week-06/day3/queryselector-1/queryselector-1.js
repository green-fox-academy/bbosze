let king = document.querySelector('#b325').innerText;
console.log(king);

let businessLamp = document.querySelectorAll('.big');
console.log(businessLamp[0].innerHTML, businessLamp[1].innerHTML);
// why can store the innerhtml in the variable?

let conceitedKing = document.querySelectorAll('.container .asteroid')
console.log(conceitedKing[0].innerHTML, conceitedKing[1].innerHTML);


let noBusiness = document.querySelectorAll('.container .asteroid, .b329')
console.log(noBusiness[0].innerHTML, noBusiness[1].innerHTML, noBusiness[2].innerHTML);
