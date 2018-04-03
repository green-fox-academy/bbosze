// const express = require('express');
// const app = express();
// const path = require('path');
// const bodyParser = require('body-parser');
// const PORT = 3000;
//
// app.use('/static', express.static('static'));
// app.use(bodyParser.json());
//
//
// app.listen(PORT, () => {
//   console.log(`Server is up on port ${PORT}.`);
// });
//
//
//
// app.post('/api/endpoint', (req, res) => {
//   console.log(req.body);
//   let sentence = req.body.text + 'áááá';
//   res.json({
//     text: sentence,
//   });
// });


let text = "This is my example sentence. Just for fun."

console.log(text.toLowerCase().split(' '));
