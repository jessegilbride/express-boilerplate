const {expect} = require('chai');
const supertest = require('supertest');
const app = require('../src/app');

describe('App', () => {
  it('GET / responds with a status:200 containing the words "Hello, world!"', () => {
    return supertest(app).get('/').expect(200, 'Hello, world!');
  })
})