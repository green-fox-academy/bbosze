let elevator = document.querySelector('.elevator');
let upBtn = document.querySelector('button[name="button1"]')
let downBtn = document.querySelector('button[name="button2"]')
let addPeopleBtn = document.querySelector('button[name="button3"]')
let removePeopleBtn = document.querySelector('button[name="button4"]')
let currentFloorIndex = 0;
let peopelInTheElevator = 0;

//CREATING STARTING POSITION
for (let i = 0; i < 9; i++) {
  let newFloor = document.createElement('div');
  elevator.appendChild(newFloor);
}

let floors = document.querySelectorAll('.elevator div')


let activeFloor = document.querySelector('.active');
activeFloor.innerText = peopelInTheElevator;

//BUTTON FUNCTIONS
function onClickUpBtn() {
  if (currentFloorIndex < floors.length - 1) {
  currentFloorIndex += 1
  activeFloor.innerText = '';
  activeFloor.classList.remove('active');
  floors[currentFloorIndex].classList.add('active');
  activeFloor = document.querySelector('.active');
  activeFloor.innerText = peopelInTheElevator;
  }
}

function onClickDownBtn() {
  if (currentFloorIndex > 0) {
  currentFloorIndex -= 1
  activeFloor.innerText = '';
  activeFloor.classList.remove('active');
  floors[currentFloorIndex].classList.add('active');
  activeFloor = document.querySelector('.active');
  activeFloor.innerText = peopelInTheElevator;
  }
}

function onClickAddBtn() {
  if (peopelInTheElevator < 10) {
    peopelInTheElevator++
    activeFloor.innerText = peopelInTheElevator;
  }
}
function onClickRemoveBtn() {
  if (peopelInTheElevator > 0) {
    peopelInTheElevator--
    activeFloor.innerText = peopelInTheElevator;
  }
}

//EVENTLISTENERS
upBtn.addEventListener('click', onClickUpBtn);
downBtn.addEventListener('click', onClickDownBtn);
addPeopleBtn.addEventListener('click', onClickAddBtn);
removePeopleBtn.addEventListener('click', onClickRemoveBtn);
