const request = require('supertest');
const app = require('../app');
const db = require('./db');

// Pass supertest agent for each test
const agent = request.agent(app);

// Setup connection to the database
beforeAll(async () => await db.connect());
beforeEach(async () => await db.clear());
afterAll(async () => await db.close());


describe('POST /api/tasks/create', () => {
    test('It should store a new task',  done => {
      agent
        .post('/api/tasks/create')
        .send({ 
            Description: 'Some Description', 
            Priority: 4,
            Status: 'STARTED',
            CustomerId: 6,
        })
        .expect(201)
        .then(res => {
          expect(res.body._id).toBeTruthy();
          done();
        });
    });
  });

const { create } = require('../services/post');

describe('services/post.js', () => {
  test('It should return a post with an id', done => {
    expect(async () => create({ title: 'Some Title', description: 'Some Description' })).not.toThrow();
    done();
  });
});