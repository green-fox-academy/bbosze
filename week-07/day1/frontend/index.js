const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 8080;

app.use('/static', express.static('static'));
app.use('/assets', express.static('assets'));
app.use(bodyParser.json());


app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}.`);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.get('/doubling', (req, res) => {
  const number = req.query.input;
  if (number != undefined) {
    res.json({
    "received": number,
    "result": number * 2
    });
  }
    res.json({
      "error": "Please provide an input!"
    })
  });


// app.get('/api/hello', (req, res) => {
//   console.log(req.query);
//   const name = req.query.name || 'Guest';
//   res.json({
//     message: `Hello ${name}`,
//   });
// });
