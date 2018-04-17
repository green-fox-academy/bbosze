'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('groot endpoint', (t) => {
  request(app)
  .get('/groot?message=hello')
  .expect(200)
  .expect('Content-Type', /json/)
  .expect({
    "received": "hello",
    "translated": "I am Groot!",
  })
  .end((err, res) => {
      t.error(err,);
      t.end();
  });
});

test('groot endpoint', (t) => {
  request(app)
  .get('/groot')
  .expect(200)
  .expect('Content-Type', /json/)
  .expect({
    "error": "I am Groot!",
  })
  .end((err, res) => {
      t.error(err,);
      t.end();
  });
});

test('groot endpoint', (t) => {
  request(app)
  .get('/')
  .expect(404)
});
