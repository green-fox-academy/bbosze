const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'hello',
  });
});

module.exports = app;


// const app = require('./app')
