
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { FantasyRolePlayingSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await FantasyRolePlayingSDK.test()
    equal(null !== testsdk, true)
  })

})
