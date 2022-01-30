
const createRandomUser = () => {
  let user = {
    userName: 'test',
    name: {
      firstName: 'test',
      lastName: 'test'
    },
    description: 'DESC test',
    active: true,
    city: 'City gtest',
    country: 'Country test',
    phone: [
      'test'
    ]
  }
  user = {
    ...user,
    userName: 'test' + Math.floor(Math.random() * 10000)
  }

  return user
}

module.exports = {
  createRandomUser
}
