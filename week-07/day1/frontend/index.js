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

//DOUBLING
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



app.get('/greeter', (req, res) => {
  const data = req.query;
  if (data.name === undefined) {
    res.json({
      error: 'Please provide a name!'
    });
  }
  else if (data.title === undefined) {
    res.json({
      error: 'Please provide a title!'
    });
  }
  res.json({
    welcome_message: `Oh, hi there ${data.name}, my dear ${data.title}!`
  });
});


//APPEND A
app.get('/appenda/:appendable', (req, res) => {
  const data = req.params.appendable + 'a';
  res.json({
    appended: `${data}`
  });
});
