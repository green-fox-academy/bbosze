'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('./app');

test('GET /', (t) => {
  request(app)
  .get('/')
  .expect(200)
  .expect('Content-Type', /json/)
  .end((err, res) => {
      t.error(err, 'no error');
      t.equals(res.body.message, 'hello');
      t.end();
  });
});
