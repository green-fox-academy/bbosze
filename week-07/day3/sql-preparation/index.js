const mysql = require('mysql');
const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');


const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'x',
  database: 'bookstore'
});

// conn.connect(err => {
//   if (err) {
//     console.log('Error connecting to Db');
//     return;
//   }
//   console.log('Connection established');
// });


// const newAuthor = {
//   aut_id: 'AUT021',
//   aut_name: 'Tesztel Jojo',
//   country: 'Australia',
//   home_city: 'Budapest'
// };
//
// conn.query('INSERT INTO author SET ?', newAuthor, (err, res) => {
//   if(err) throw err;
//
//   console.log('Last insert ID:', newAuthor.aut_id);
// });

// conn.query('SELECT * FROM author', (err,rows) => {
//   if (err) {
//     console.log(err.toString());
//     return
//   }
//   console.log('Data received from Db:\n');
//   console.log(rows);
//   conn.end();
// });
//
app.get('/', function(req, res) {
  conn.query('SELECT book_name FROM book_mast;', function(err, rows) {
    if (err) {
      console.log(err.toString());
      res.satus(500).send('Database error');
      return;
    }
    res.json(rows);
  });
});

// app.get('/', (req, res) => {
//   res.render('home');
// })


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
