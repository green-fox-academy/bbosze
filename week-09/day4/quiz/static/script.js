'use strict'

let container = document.querySelector('.container');
let questionLine = document.createElement('p');
questionLine.classList.add('question');
container.appendChild(questionLine);

let data = {};
let correctAnswers = [];

const xmlhttp = new XMLHttpRequest();
xmlhttp.open('GET', '/games');
xmlhttp.onload = () => {
  correctAnswers = [];
  data = JSON.parse(xmlhttp.responseText);
  console.log(data);
  let random = Math.floor(Math.random() * 40)
  console.log(random);
  let questionId = data.rows[random].question_id
  questionLine.innerText = data.rows[random].question;
  data.rows.forEach((e) => {
    if (e.question_id === questionId) {
      let newButton = document.createElement('button');
      newButton.classList.add('button');
      newButton.innerText = e.answer;
      container.appendChild(newButton);
      correctAnswers.push(e.is_correct);
    };
  });
  let buttons = document.querySelectorAll('.button');
  buttons.forEach((e, i) => {
    e.addEventListener('click', () => {
        if (correctAnswers.indexOf(1) === i){
          // alert('jee');
          buttons[i].classList.add('correct');
          buttons[i].innerText ='CORRECT!!!';
          setTimeout(() => window.location='http://localhost:3000/game', 3000)
        }
        else {
        buttons[i].innerText ='INCORRECT!!!';
        buttons[i].classList.add('incorrect');
        setTimeout(() => window.location='http://localhost:3000/game', 3000)
        }
    });
  });

};
xmlhttp.send();
