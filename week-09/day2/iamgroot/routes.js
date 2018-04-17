const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
  const message = req.query.message;
  if (message != undefined) {
    res.json({
    "received": message,
    "translated": "I am Groot!",
    });
  }
    res.json({
    "error": "I am Groot!"
  })
});

module.exports = app;
