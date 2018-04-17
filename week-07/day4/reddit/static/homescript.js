let upButton = document.querySelectorAll('.upvote');
let downButton = document.querySelectorAll('.downvote');
let voteNumber = document.querySelectorAll('.votenumber')


upButton.forEach((e, i) => {
  e.addEventListener('click', () => {
      const xmlhttp = new XMLHttpRequest();
      let id = e.id;
      let upVote = '/posts/' + e.id  + '/upvote/'
      xmlhttp.open('PUT', upVote);
      xmlhttp.send();
      voteNumber[i].innerText = parseInt(voteNumber[i].innerText) + 1;
      upButton[i].setAttribute('disabled', 'disabled');
      downButton[i].disabled = false;
      upButton[i].classList.add('disabled');
      downButton[i].classList.add('enabled');
  });
});

downButton.forEach((e, i) => {
  e.addEventListener('click', () => {
      const xmlhttp = new XMLHttpRequest();
      let id = e.id;
      let downVote = '/posts/' + e.id  + '/downvote/'
      xmlhttp.open('PUT', downVote);
      xmlhttp.send();      // num = parseInt(voteNumber[0].innerText) - 1;
      voteNumber[i].innerText = parseInt(voteNumber[i].innerText) - 1;
      downButton[i].setAttribute('disabled', 'disabled');
      upButton[i].disabled = false;
      upButton[i].classList.remove('disabled');
      downButton[i].classList.remove('enabled');
  });
});
