'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('rocket endpoint', (t) => {
  request(app)
  .get('/rocket')
  .expect(200)
  .expect('Content-Type', /json/)
  .expect({
    "caliber25": 0,
    "caliber30": 0,
    "caliber50": 0,
    "shipstatus": "empty",
    "ready": false
  })
  .end((err, res) => {
      t.error(err,);
      t.end();
  });
});

test('rocket/fill endpoint with basic data', (t) => {
  request(app)
  .get('/rocket/fill?caliber=.50&amount=5000')
  .expect(200)
  .expect('Content-Type', /json/)
  .expect({
      "received": ".50",
      "amount": "5000",
      "shipstatus": "40%",
      "ready": false
  })
  .end((err, res) => {
      t.error(err,);
      t.end();
  });
});

test('rocket/fill endpoint with basic data', (t) => {
  request(app)
  .get('/rocket/fill?caliber=.50&amount=12500')
  .expect(200)
  .expect('Content-Type', /json/)
  .expect({
      "received": ".50",
      "amount": "12500",
      "shipstatus": "40%",
      "ready": true
  })
  .end((err, res) => {
      t.error(err,);
      t.end();
  });
});
