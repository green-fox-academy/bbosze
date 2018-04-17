const express = require('express');
const path = require('path'); // not necessary
const mysql = require('mysql');

const app = express();
const PORT = 3000;
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'x',
  database: 'spaceship',
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // not necessary
app.use('/static', express.static(path.join(__dirname, 'static')));
app.use(express.json());

// SELECT * FROM answers INNER JOIN questions ON answers.question_id=questions.id;

 SELECT * FROM answers WHERE question_id = 1 INNER JOIN questions ON answers.question_id=questions.id;

SELECT * FROM questions WHERE questions.id = 1 INNER JOIN answers ON questions.id = answers.question_id;

SELECT * FROM questions INNER JOIN answers ON questions.id = answers.question_id;

SELECT questions.id FROM questions INNER JOIN answers ON questions.id = answers.question_id;




app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`); // eslint-disable-line
});
