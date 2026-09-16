"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('RollEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when FANTASY_ROLE_PLAYING_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('FANTASY_ROLE_PLAYING_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.FantasyRolePlayingSDK.test();
        const ent = testsdk.Roll();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.FANTASY_ROLE_PLAYING_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'roll.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "advantages", "req": false, "short": "Character advantages", "type": "`$ARRAY`", "index$": 0 }, { "active": true, "name": "attributes", "req": false, "short": "Character attributes and stats", "type": "`$OBJECT`", "index$": 1 }, { "active": true, "name": "class", "req": false, "short": "Class of the character", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "description", "req": false, "short": "Description of the set", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "disadvantages", "req": false, "short": "Character disadvantages", "type": "`$ARRAY`", "index$": 4 }, { "active": true, "name": "id", "req": false, "short": "Unique identifier for the character", "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "items", "req": false, "short": "Items included in the set", "type": "`$ARRAY`", "index$": 6 }, { "active": true, "name": "level", "req": false, "short": "Level of the character", "type": "`$INTEGER`", "index$": 7 }, { "active": true, "name": "name", "req": false, "short": "Name of the character", "type": "`$STRING`", "index$": 8 }, { "active": true, "name": "race", "req": false, "short": "Race of the character", "type": "`$STRING`", "index$": 9 }, { "active": true, "name": "skills", "req": false, "short": "Character skills", "type": "`$ARRAY`", "index$": 10 }], "id": { "field": "id", "name": "id" }, "name": "roll", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": {}, "contract": { "id": "GET /roll/character", "json": "{\"operationId\":\"rollCharacter\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"advantages\":{\"description\":\"Character advantages\",\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"attributes\":{\"description\":\"Character attributes and stats\",\"properties\":{\"charisma\":{\"type\":\"integer\"},\"constitution\":{\"type\":\"integer\"},\"dexterity\":{\"type\":\"integer\"},\"intelligence\":{\"type\":\"integer\"},\"strength\":{\"type\":\"integer\"},\"wisdom\":{\"type\":\"integer\"}},\"type\":\"object\"},\"class\":{\"description\":\"Class of the character\",\"type\":\"string\"},\"disadvantages\":{\"description\":\"Character disadvantages\",\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"description\":\"Unique identifier for the character\",\"type\":\"string\"},\"level\":{\"description\":\"Level of the character\",\"type\":\"integer\"},\"name\":{\"description\":\"Name of the character\",\"type\":\"string\"},\"race\":{\"description\":\"Race of the character\",\"type\":\"string\"},\"skills\":{\"description\":\"Character skills\",\"items\":{\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Successful response with generated character\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/roll/character", "segments": [{ "lit": "roll" }, { "lit": "character" }], "select": { "$action": "character" }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": {}, "contract": { "id": "GET /roll/set", "json": "{\"operationId\":\"rollSet\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"description\":{\"description\":\"Description of the set\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the set\",\"type\":\"string\"},\"items\":{\"description\":\"Items included in the set\",\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"name\":{\"description\":\"Name of the set\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response with generated set\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/roll/set", "segments": [{ "lit": "roll" }, { "lit": "set" }], "select": { "$action": "set" }, "transform": { "req": "`reqdata`", "res": "`body.items`" }, "index$": 1 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": {}, "contract": { "id": "GET /roll/item", "json": "{\"operationId\":\"rollItem\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"description\":{\"description\":\"Description of the item\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the item\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the item\",\"type\":\"string\"},\"properties\":{\"description\":\"Additional properties of the item\",\"type\":\"object\"},\"rarity\":{\"description\":\"Rarity level of the item\",\"type\":\"string\"},\"type\":{\"description\":\"Type or category of the item\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response with generated item\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/roll/item", "segments": [{ "lit": "roll" }, { "lit": "item" }], "select": { "$action": "item" }, "transform": { "req": "`reqdata`", "res": "`body.properties`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "roll", "name__orig": "roll", "Name": "Roll", "name_": "roll", "name-": "roll", "NAME": "ROLL", "index$": 1 }, { "active": true, "entity": "roll", "key$": "BasicRollFlow", "kind": "basic", "name": "BasicRollFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "roll_ref01" } }], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "roll_ref01", "srcdatavar": "roll_ref01_data", "suffix": "_dt0" }, "match": {}, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-roll_ref01" } }], "index$": 1 }] }, 'Roll');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let roll_ref01_data = Object.values(setup.data.existing.roll)[0];
        // LIST
        const roll_ref01_ent = client.Roll();
        const roll_ref01_match = {};
        const roll_ref01_list = (await roll_ref01_ent.list(roll_ref01_match)).map((e) => e.data());
        // LOAD
        const roll_ref01_match_dt0 = {};
        roll_ref01_match_dt0.id = roll_ref01_data.id;
        const roll_ref01_data_dt0 = (await roll_ref01_ent.load(roll_ref01_match_dt0)).data();
        (0, node_assert_1.default)(roll_ref01_data_dt0.id === roll_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/roll/RollTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.FantasyRolePlayingSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['roll01', 'roll02', 'roll03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'FANTASY_ROLE_PLAYING_TEST_ROLL_ENTID': idmap,
        'FANTASY_ROLE_PLAYING_TEST_LIVE': 'FALSE',
        'FANTASY_ROLE_PLAYING_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['FANTASY_ROLE_PLAYING_TEST_ROLL_ENTID'];
    const live = 'TRUE' === env.FANTASY_ROLE_PLAYING_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['FANTASY_ROLE_PLAYING_TEST_ROLL_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.FantasyRolePlayingSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=RollEntity.test.js.map