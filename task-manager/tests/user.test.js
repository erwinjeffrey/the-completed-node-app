const request = require('supertest');
const app = require('../src/app');

test('Should signup a new user', async () => {
  await request(app)
    .post('/users')
    .send({
      name: 'Erwin',
      email: 'erwinjefly@gmail.com',
      password: 'erwin123'
    })
    .expect(201);
});
