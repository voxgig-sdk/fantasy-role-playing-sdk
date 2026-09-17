

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


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('RollEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when FANTASY_ROLE_PLAYING_TEST_LIVE=TRUE.
  afterEach(liveDelay('FANTASY_ROLE_PLAYING_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = FantasyRolePlayingSDK.test()
    const ent = testsdk.Roll()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.FANTASY_ROLE_PLAYING_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'roll.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[],"name":"roll","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{},"contract":{"id":"GET /roll/character","json":"{\"operationId\":\"rollCharacter\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"advantages\":{\"description\":\"Character advantages\",\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"attributes\":{\"description\":\"Character attributes and stats\",\"properties\":{\"charisma\":{\"type\":\"integer\"},\"constitution\":{\"type\":\"integer\"},\"dexterity\":{\"type\":\"integer\"},\"intelligence\":{\"type\":\"integer\"},\"strength\":{\"type\":\"integer\"},\"wisdom\":{\"type\":\"integer\"}},\"type\":\"object\"},\"class\":{\"description\":\"Class of the character\",\"type\":\"string\"},\"disadvantages\":{\"description\":\"Character disadvantages\",\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"description\":\"Unique identifier for the character\",\"type\":\"string\"},\"level\":{\"description\":\"Level of the character\",\"type\":\"integer\"},\"name\":{\"description\":\"Name of the character\",\"type\":\"string\"},\"race\":{\"description\":\"Race of the character\",\"type\":\"string\"},\"skills\":{\"description\":\"Character skills\",\"items\":{\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Successful response with generated character\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/roll/character","segments":[{"lit":"roll"},{"lit":"character"}],"select":{"$action":"character"},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{},"contract":{"id":"GET /roll/set","json":"{\"operationId\":\"rollSet\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"description\":{\"description\":\"Description of the set\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the set\",\"type\":\"string\"},\"items\":{\"description\":\"Items included in the set\",\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"name\":{\"description\":\"Name of the set\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response with generated set\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/roll/set","segments":[{"lit":"roll"},{"lit":"set"}],"select":{"$action":"set"},"transform":{"req":"`reqdata`","res":"`body.items`"},"index$":1}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{},"contract":{"id":"GET /roll/item","json":"{\"operationId\":\"rollItem\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"description\":{\"description\":\"Description of the item\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the item\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the item\",\"type\":\"string\"},\"properties\":{\"description\":\"Additional properties of the item\",\"type\":\"object\"},\"rarity\":{\"description\":\"Rarity level of the item\",\"type\":\"string\"},\"type\":{\"description\":\"Type or category of the item\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response with generated item\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/roll/item","segments":[{"lit":"roll"},{"lit":"item"}],"select":{"$action":"item"},"transform":{"req":"`reqdata`","res":"`body.properties`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"roll","name__orig":"roll","Name":"Roll","name_":"roll","name-":"roll","NAME":"ROLL","index$":1}, {"active":true,"entity":"roll","key$":"BasicRollFlow","kind":"basic","name":"BasicRollFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"roll_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"roll_ref01","srcdatavar":"roll_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-roll_ref01"}}],"index$":1}]}, 'Roll')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let roll_ref01_data = Object.values(setup.data.existing.roll)[0] as any

    // LIST
    const roll_ref01_ent = client.Roll()
    const roll_ref01_match: any = {}

    const roll_ref01_list = (await roll_ref01_ent.list(roll_ref01_match)).map((e: any) => e.data())


    // LOAD
    const roll_ref01_match_dt0: any = {}
    const roll_ref01_data_dt0 = (await roll_ref01_ent.load(roll_ref01_match_dt0)).data()
    assert(null != roll_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/roll/RollTestData.json')

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
    ['roll01','roll02','roll03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'FANTASY_ROLE_PLAYING_TEST_ROLL_ENTID': idmap,
    'FANTASY_ROLE_PLAYING_TEST_LIVE': 'FALSE',
    'FANTASY_ROLE_PLAYING_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['FANTASY_ROLE_PLAYING_TEST_ROLL_ENTID']

  const live = 'TRUE' === env.FANTASY_ROLE_PLAYING_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['FANTASY_ROLE_PLAYING_TEST_ROLL_ENTID']
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
  
