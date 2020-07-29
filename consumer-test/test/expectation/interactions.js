const { somethingLike: like, term } = require('@pact-foundation/pact').Matchers

const EXPECTED_BODY_USER_1 = {
  name: like('king arthur'),
  password: like('password1'),
  profession: like('king'),
}

const getValidUserInteraction = {
  state: 'i have a list of users',
  uponReceiving: 'a request for a single user',
  withRequest: {
    method: 'GET',
    path: '/users/1',
    headers: {
      Accept: 'application/json',
    },
  },
  willRespondWith: {
    status: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: EXPECTED_BODY_USER_1,
  },
}


module.exports = {
  getValidUserInteraction
}
