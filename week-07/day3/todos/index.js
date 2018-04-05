const express = require('express');
const app = express();
const PORT = 3000;

const todos = [
  'get up',
  'survive',
  'go back to bed',
];

app.set('view engine', 'ejs');
app.use('/img', express.static('img'));

app.get('/', (req, res) => {
  const name = req.query.name;
  if (name !== undefined) {
    res.render('home', {
      name: name,
      todos: todos,
    });
  }
    res.render('home', {
      name: 'Guest',
      todos: todos,
    })
  });


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
