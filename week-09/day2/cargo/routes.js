const express = require('express');
const app = express();


let ammo = {
  "caliber25": 0,
  "caliber30": 0,
  "caliber50": 0,
  "shipstatus": "empty",
  "ready": false
}


app.get('/rocket', (req, res) => {
    res.json({
    "caliber25": ammo.caliber25,
    "caliber30": ammo.caliber30,
    "caliber50": ammo.caliber50,
    "shipstatus": ammo.shipstatus,
    "ready": ammo.ready,
    });
});

app.get('/rocket/fill', (req, res) => {
  const data = req.query;
  if (parseInt(req.query.amount) < 12500)
  res.json({
    "received": data.caliber,
    "amount": data.amount,
    "shipstatus": `${data.amount / 12500 * 100}%`,
    "ready": false
  });
  res.json({
    "received": data.caliber,
    "amount": data.amount,
    "shipstatus": `${data.amount / 12500 * 100}%`,
    "ready": true
  });

});

module.exports = app;
