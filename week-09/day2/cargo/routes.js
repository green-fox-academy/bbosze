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
  let caliber = req.query.caliber;
  if(!isNaN(parseInt(req.query.amount)) && !isNaN(parseFloat(req.query.caliber)) && parseInt(req.query.amount) < 12500) {
    if (ammo.caliber25 + ammo.caliber30 + ammo.caliber50 < 12500) {
      switch (parseFloat(req.query.caliber)) {
        case 0.25:
          ammo.caliber25 += parseInt(req.query.amount);
          break;
        case 0.3:
          ammo.caliber30 += parseInt(req.query.amount);
          break;
        case 0.5:
          ammo.caliber50 += parseInt(req.query.amount);
          break
        default:
          console.log('error');
      }
      res.json({
        "received": data.caliber,
        "amount": parseInt(data.amount),
        "shipstatus": `${data.amount / 12500 * 100}%`,
        "ready": false
      });
    }
  }
  else if (!isNaN(parseInt(req.query.amount)) && !isNaN(parseFloat(req.query.caliber)) && parseInt(req.query.amount) === 12500) {
    res.json({
      "received": data.caliber,
      "amount": parseInt(data.amount),
      "shipstatus": "full",
      "ready": true
    });
  }
  else if (!isNaN(parseInt(req.query.amount)) && !isNaN(parseFloat(req.query.caliber)) && parseInt(req.query.amount) > 12500) {
    res.json({
      "error": "Too much ammo!"
    });
  }
  res.json({
    "error": "No ammo!"
  })
});

module.exports = app;
