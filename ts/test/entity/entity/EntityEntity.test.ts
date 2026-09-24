

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { FantasyRolePlayingSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('EntityEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when FANTASY_ROLE_PLAYING_TEST_LIVE=TRUE.
  afterEach(liveDelay('FANTASY_ROLE_PLAYING_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = FantasyRolePlayingSDK.test()
    const ent = testsdk.Entity()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.FANTASY_ROLE_PLAYING_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'entity.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"Description of the advantage","t":"`$STRING`","key$":"description","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"Unique identifier for the advantage","t":"`$STRING`","key$":"id","index$":1},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"Name of the advantage","t":"`$STRING`","key$":"name","index$":2}},"id":{"field":"id","name":"id"},"name":"entity","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /advantages","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/advantages","q":{},"r":{},"s":[{"lit":"advantages"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /disadvantages","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/disadvantages","q":{},"r":{},"s":[{"lit":"disadvantages"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /skills","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/skills","q":{},"r":{},"s":[{"lit":"skills"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"entity","name__orig":"entity","Name":"Entity","name_":"entity","name-":"entity","NAME":"ENTITY","index$":0}, {"active":true,"entity":"entity","key$":"BasicEntityFlow","kind":"basic","name":"BasicEntityFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"entity_ref01"}}],"index$":0}]}, 'Entity', {"GET /advantages":{"protocol":"http","operationId":"getAdvantages","responses":{"200":{"description":"Successful response with advantages list","content":{"application/json":{"schema":{"type":"array","items":{"type":"object","properties":{"id":{"type":"string","description":"Unique identifier for the advantage","key$":"id"},"name":{"type":"string","description":"Name of the advantage","key$":"name"},"description":{"type":"string","description":"Description of the advantage","key$":"description"}},"index$":0}}}}}},"parameters":[],"securitySource":"unspecified"},"GET /disadvantages":{"protocol":"http","operationId":"getDisadvantages","responses":{"200":{"description":"Successful response with disadvantages list","content":{"application/json":{"schema":{"type":"array","items":{"type":"object","properties":{"id":{"type":"string","description":"Unique identifier for the disadvantage","key$":"id"},"name":{"type":"string","description":"Name of the disadvantage","key$":"name"},"description":{"type":"string","description":"Description of the disadvantage","key$":"description"}},"index$":0}}}}}},"parameters":[],"securitySource":"unspecified"},"GET /skills":{"protocol":"http","operationId":"getSkills","responses":{"200":{"description":"Successful response with skills list","content":{"application/json":{"schema":{"type":"array","items":{"type":"object","properties":{"id":{"type":"string","description":"Unique identifier for the skill","key$":"id"},"name":{"type":"string","description":"Name of the skill","key$":"name"},"description":{"type":"string","description":"Description of the skill","key$":"description"}},"index$":0}}}}}},"parameters":[],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let entity_ref01_data = Object.values(setup.data.existing.entity)[0] as any

    // LIST
    const entity_ref01_ent = client.Entity()
    const entity_ref01_match: any = {}

    const entity_ref01_list = (await entity_ref01_ent.list(entity_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/entity/EntityTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = FantasyRolePlayingSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['entity01','entity02','entity03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'FANTASY_ROLE_PLAYING_TEST_ENTITY_ENTID': idmap,
    'FANTASY_ROLE_PLAYING_TEST_LIVE': 'FALSE',
    'FANTASY_ROLE_PLAYING_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['FANTASY_ROLE_PLAYING_TEST_ENTITY_ENTID']

  const live = 'TRUE' === env.FANTASY_ROLE_PLAYING_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['FANTASY_ROLE_PLAYING_TEST_ENTITY_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new FantasyRolePlayingSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.FANTASY_ROLE_PLAYING_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
