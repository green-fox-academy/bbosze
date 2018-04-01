'use strict'


let candyNumber = 0;

let candyNumberDisplay = document.querySelector('.candies');
let candyCreatorButton = document.querySelector('.create-candies');
let lollipopNumberDisplay = document.querySelector('.lollypops');
let buyLollipopButton = document.querySelector('.buy-lollypops');
let candyMachine = document.querySelector('.candy-machine');
let speed = document.querySelector('.speed');

let candyRefresh = () => candyNumberDisplay.innerText = candyNumber;

let createCandy = () => {
  speed.innerText++;
  if (candyMachine.classList.contains('rain')) {
    candyNumber += 10;
    candyRefresh()
  }
  else {
    candyNumber++;
    candyRefresh()
  }
}

let buyLollipop = () => {
  if (candyNumber >= 100) {
    lollipopNumberDisplay.textContent += '🍭';
    candyNumber -= 100;
    candyRefresh()
  }
}

let candyRain = () => {
  candyMachine.classList.toggle('rain');
  if (candyMachine.classList.contains('rain')) {
    candyMachine.innerText = 'Candyrain ON';
  }
  else {
    candyMachine.innerText = 'Candyrain OFF';
  }
}

candyCreatorButton.addEventListener('click', createCandy);
buyLollipopButton.addEventListener('click', buyLollipop);
candyMachine.addEventListener('click', candyRain);
