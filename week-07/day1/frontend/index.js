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
    appended: data,
  });
});

//DO UNTIL

app.post('/dountil/:what', (req, res) => {
  let number = req.body.until;
  const what = req.params.what;
  if (what === 'sum') {
    for (let i = number - 1; i > 0; i--) {
      number += i
    }
    res.json({
      result: number,
    });
  }
  if (what === 'factor') {
    for (let i = number - 1; i > 0; i--) {
      number *= i;
    }
    res.json({
      result: number,
    });
  }
  else {
    res.json({
  "error": "Please provide a number!"
    });
  }
});


//ARRAY-HANDLER

app.post('/arrays/:what', (req, res) => {
  let number = req.body.numbers;
  const what = req.params.what;
  let result = 0;
  if (what === 'sum') {
    for (let i = 0; i < number.length; i++) {
      result += number[i];
    }
    res.json({
      result: result,
    });
  }
  if (what === 'multiply') {
    result = 1;
    for (let i = 0; i < number.length ; i++) {
      result *= number[i];
    }
    res.json({
      result: result,
    });
  }
  if (what === 'double') {
    for (let i = 0; i < number.length ; i++) {
      number[i] = number[i] * 2;
    }
    res.json({
      result: number,
    });
  }
  else {
    res.json({
      error: 'Please provide what to do with the numbers!',
    });
  }
});
