const express = require('express');
const app = express();
const PORT = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use('/img', express.static('img'));


// home page




app.get('/', (req, res) => {
  const name = req.query.name;
  if (name !== undefined) {
    res.render('index', {
      name: name,
    });
  }
    res.render('index', {
      name: 'Guest',
    })
  });


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
