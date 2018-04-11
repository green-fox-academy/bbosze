const express = require('express');
const path = require('path'); // not necessary
const mysql = require('mysql');

const app = express();
const PORT = 3000;
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'x',
  database: 'shop',
  // port: 3306,
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // not necessary
app.use('/static', express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
  const sql = 'SELECT * FROM history ORDER BY date DESC LIMIT 15;';
  conn.query(sql, (err, result) => {
    if (err) {
      console.log(err); // eslint-disable-line
      res.sendStatus(500);
    }
    res.render('index', {
      title: 'Dashboard',
      history: result,
    });
  });
});

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`); // eslint-disable-line
});
