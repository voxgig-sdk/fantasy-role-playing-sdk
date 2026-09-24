
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { FantasyRolePlayingSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = FantasyRolePlayingSDK.test()
    equal(testsdk instanceof FantasyRolePlayingSDK, true,
      'FantasyRolePlayingSDK.test() must return a client synchronously')
  })

})
