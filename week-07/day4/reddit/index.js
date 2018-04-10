const mysql = require('mysql');
const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use('/static', express.static('static'));
app.use(express.json());

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'x',
  database: 'reddit'
});


app.get('/posts', function(req, res) {
  conn.query('SELECT * FROM posts;', (err, rows) => {
    if (err) {
      console.log(err.toString());
      res.satus(500).send('Database error');
      return;
    }
    res.render('home', {
      rows,
    })
  });
});

app.post('/posts', (req, res) => {
  let title = req.body.title;
  let url = req.body.url;
  conn.query(`INSERT INTO posts (title, url) values ('${title}', '${url}');`, (err, rows) => {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.json({
      message: 'OK',
      id: rows.insertId
    });
  });
});




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
