# FantasyRolePlaying SDK configuration


def make_config():
    return {
        "main": {
            "name": "FantasyRolePlaying",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://set.world/api",
            "auth": {
                "prefix": "Bearer",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "entity": {},
                "roll": {},
            },
        },
        "entity": {
      "entity": {
        "fields": [
          {
            "name": "description",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "id",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
        ],
        "name": "entity",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "method": "GET",
                "orig": "/advantages",
                "parts": [
                  "advantages",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 0,
              },
              {
                "method": "GET",
                "orig": "/disadvantages",
                "parts": [
                  "disadvantages",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 1,
              },
              {
                "method": "GET",
                "orig": "/skills",
                "parts": [
                  "skills",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 2,
              },
            ],
            "input": "data",
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "roll": {
        "fields": [
          {
            "name": "advantage",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "attribute",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "class",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "description",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "disadvantage",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "id",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "item",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "level",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 7,
          },
          {
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 8,
          },
          {
            "name": "property",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 9,
          },
          {
            "name": "race",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 10,
          },
          {
            "name": "rarity",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 11,
          },
          {
            "name": "skill",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 12,
          },
          {
            "name": "type",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 13,
          },
        ],
        "name": "roll",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "method": "GET",
                "orig": "/roll/character",
                "parts": [
                  "roll",
                  "character",
                ],
                "select": {
                  "$action": "character",
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "index$": 0,
              },
              {
                "method": "GET",
                "orig": "/roll/set",
                "parts": [
                  "roll",
                  "set",
                ],
                "select": {
                  "$action": "set",
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "index$": 1,
              },
            ],
            "input": "data",
            "key$": "list",
          },
          "load": {
            "name": "load",
            "points": [
              {
                "method": "GET",
                "orig": "/roll/item",
                "parts": [
                  "roll",
                  "item",
                ],
                "select": {
                  "$action": "item",
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
