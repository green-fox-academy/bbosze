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
      e.classList.remove('upvote');
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
  });
});
