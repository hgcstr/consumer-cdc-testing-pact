// 'use strict'

const expect = require('chai').expect
const { getUser } = require('./consumer')
const { getValidUserInteraction } = require('./expectation/interactions')
const { usersProvider } = require('./expectation/providers')

describe('The Users API', () => {
  // Setup the provider
  before(() => usersProvider.setup())

  // Write Pact when all tests done
  after(() => usersProvider.finalize())

  // verify with Pact, and reset expectations
  afterEach(() => usersProvider.verify())

  describe('get /users', () => {
    const EXPECTED_BODY_USER_1 = {
      name: 'king arthur',
      password: 'password1',
      profession: 'king'
    }
    const validUserId = '1'
    it('returns the correct response for user 1', async () => {
      await usersProvider.addInteraction(getValidUserInteraction)
      const response = await getUser(validUserId)
      expect(response.data).to.eql(EXPECTED_BODY_USER_1)
    })

    it('returns the correct response status', async () => {
      await usersProvider.addInteraction(getValidUserInteraction)
      const response = await getUser(validUserId)
      expect(response.status).to.eql(200)
    })
  })
})
