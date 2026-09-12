"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const TestFeature_1 = require("./feature/test/TestFeature");
const FEATURE_CLASS = {
    test: TestFeature_1.TestFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'FantasyRolePlaying',
        slug: "fantasy-role-playing",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        test: {
            "options": {
                "active": false
            },
            "transport": "base"
        },
    };
    options = {
        base: "https://set.world/api",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            entity: {},
            roll: {},
        }
    };
    entity = {
        "entity": {
            "fields": [
                {
                    "name": "description",
                    "short": "Description of the advantage",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "short": "Unique identifier for the advantage",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "short": "Name of the advantage",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "entity",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/advantages",
                            "segments": [
                                {
                                    "lit": "advantages"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "advantages"
                            ]
                        },
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/disadvantages",
                            "segments": [
                                {
                                    "lit": "disadvantages"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "disadvantages"
                            ]
                        },
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/skills",
                            "segments": [
                                {
                                    "lit": "skills"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "skills"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "roll": {
            "fields": [
                {
                    "name": "advantages",
                    "short": "Character advantages",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "attributes",
                    "short": "Character attributes and stats",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "class",
                    "short": "Class of the character",
                    "type": "`$STRING`"
                },
                {
                    "name": "description",
                    "short": "Description of the set",
                    "type": "`$STRING`"
                },
                {
                    "name": "disadvantages",
                    "short": "Character disadvantages",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "id",
                    "short": "Unique identifier for the character",
                    "type": "`$STRING`"
                },
                {
                    "name": "items",
                    "short": "Items included in the set",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "level",
                    "short": "Level of the character",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "name",
                    "short": "Name of the character",
                    "type": "`$STRING`"
                },
                {
                    "name": "race",
                    "short": "Race of the character",
                    "type": "`$STRING`"
                },
                {
                    "name": "skills",
                    "short": "Character skills",
                    "type": "`$ARRAY`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "roll",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/roll/character",
                            "segments": [
                                {
                                    "lit": "roll"
                                },
                                {
                                    "lit": "character"
                                }
                            ],
                            "select": {
                                "$action": "character"
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "roll",
                                "character"
                            ]
                        },
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/roll/set",
                            "segments": [
                                {
                                    "lit": "roll"
                                },
                                {
                                    "lit": "set"
                                }
                            ],
                            "select": {
                                "$action": "set"
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.items`"
                            },
                            "parts": [
                                "roll",
                                "set"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/roll/item",
                            "segments": [
                                {
                                    "lit": "roll"
                                },
                                {
                                    "lit": "item"
                                }
                            ],
                            "select": {
                                "$action": "item"
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.properties`"
                            },
                            "parts": [
                                "roll",
                                "item"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map