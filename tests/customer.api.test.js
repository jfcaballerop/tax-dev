const supertest = require('supertest')
const app = require('../server')

const request = supertest(app)

describe('Customer API Test', () => {
  test('Get return JSON', async () => {
    expect.assertions(1)

    await request
      .get('/api/customers')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })
})

/*
const app = require('./app');
const request = require('supertest');

describe('47865190', () => {
  it('should pass', (done) => {
    expect.assertions(1);
    request(app)
      .post('/auth/signup')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual(
          expect.objectContaining({
            success: true,
            message: 'registration success',
            token: expect.any(String),
            user: expect.any(Object),
          }),
        );
        done();
      });
  });
});
*/
