const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 3000;

app.use('/static', express.static('static'));
app.use(bodyParser.json());


app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}.`);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.post('/api/endpoint', (req, res) => {
  console.log(req.body);
  //res endpoint
  res.json({
      message: 'OK',
  });
});

app.get('/api/hello', (req, res) => {
  console.log(req.query);
  const name = req.query.name || 'Guest';
  res.json({
    message: `Hello ${name}`,
  });
});

const mentors = [
  { name: 'István', age: 30 },
  { name: 'Bence', age: 42 },
  { name: 'Balázs', age: 27 },
];

const listMentors = (req, res) => {
  console.log(req);
  res.json(mentors);
}

app.get('/api/mentors', listMentors);
app.get('/api/mentors/:mentorId', (req, res) => {
  const mentor = mentors[req.params.mentorId - 1]

  if (mentor === undefined) {
    res.status(404);
    res.json(
      {
        message: `No mentor with id ${req.params.mentorId}`
      }
    )
  }
  res.json(mentor);
});
// : MANDATORY
