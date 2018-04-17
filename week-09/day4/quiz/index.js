const express = require('express');
const path = require('path'); // not necessary
const mysql = require('mysql');

const app = express();
const PORT = 3000;
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'x',
  database: 'quiz',
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // not necessary
app.use('/static', express.static(path.join(__dirname, 'static')));
app.use(express.json());

app.get('/game', (req, res) => {
  conn.query(`SELECT * FROM answers INNER JOIN questions ON questions.id = answers.question_id;`, (err, rows) => {
    if (err) {
      console.log(err.toString()); // eslint-disable-line
      res.status(500).send('Database error');
      return;
    }
    res.render('game', {
      rows,
    });
  });
});


app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`); // eslint-disable-line
});
