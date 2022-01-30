const supertest = require('supertest')
const app = require('../../app')
const db = require('../../src/models')

const request = supertest(app)

describe('Customer API Test', () => {
  afterAll(() => {
    // Closing the DB connection allows Jest to exit successfully.
    db.mongoose.connection.close()
  })

  test('Ping test', async () => {
    const response = await request.get('/')

    expect(response.statusCode).toBe(200)
  })

  test('Get ALL customers', async () => {
    // expect.assertions(1)

    const response = await request
      .get('/api/customers/')
      .expect(200)
      .expect('Content-Type', /application\/json/)

    console.log('End ***')
    expect(response.status).toBe(200)
  })
})
