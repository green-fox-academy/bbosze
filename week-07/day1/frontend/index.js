const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 3000;

app.use('/static', express.static('static'));
app.use('/assets', express.static('assets'));
app.use(bodyParser.json());


app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}.`);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});
