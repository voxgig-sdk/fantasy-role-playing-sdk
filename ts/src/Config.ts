
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'ProjectName',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    }

  }


  options = {
    base: 'https://set.world/api',

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      entity: {
      },

      roll: {
      },

    }
  }


  entity = {
    "entity": {
      "fields": [
        {
          "name": "description",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 0
        },
        {
          "name": "id",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 1
        },
        {
          "name": "name",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 2
        }
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
                "advantages"
              ],
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "args": {},
              "select": {},
              "index$": 0
            },
            {
              "method": "GET",
              "orig": "/disadvantages",
              "parts": [
                "disadvantages"
              ],
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "args": {},
              "select": {},
              "index$": 1
            },
            {
              "method": "GET",
              "orig": "/skills",
              "parts": [
                "skills"
              ],
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "args": {},
              "select": {},
              "index$": 2
            }
          ],
          "input": "data",
          "key$": "list"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "roll": {
      "fields": [
        {
          "name": "advantage",
          "req": false,
          "type": "`$ARRAY`",
          "active": true,
          "index$": 0
        },
        {
          "name": "attribute",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 1
        },
        {
          "name": "class",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 2
        },
        {
          "name": "description",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 3
        },
        {
          "name": "disadvantage",
          "req": false,
          "type": "`$ARRAY`",
          "active": true,
          "index$": 4
        },
        {
          "name": "id",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 5
        },
        {
          "name": "item",
          "req": false,
          "type": "`$ARRAY`",
          "active": true,
          "index$": 6
        },
        {
          "name": "level",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 7
        },
        {
          "name": "name",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 8
        },
        {
          "name": "property",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 9
        },
        {
          "name": "race",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 10
        },
        {
          "name": "rarity",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 11
        },
        {
          "name": "skill",
          "req": false,
          "type": "`$ARRAY`",
          "active": true,
          "index$": 12
        },
        {
          "name": "type",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 13
        }
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
                "character"
              ],
              "select": {
                "$action": "character"
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "args": {},
              "index$": 0
            },
            {
              "method": "GET",
              "orig": "/roll/set",
              "parts": [
                "roll",
                "set"
              ],
              "select": {
                "$action": "set"
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "args": {},
              "index$": 1
            }
          ],
          "input": "data",
          "key$": "list"
        },
        "load": {
          "name": "load",
          "points": [
            {
              "method": "GET",
              "orig": "/roll/item",
              "parts": [
                "roll",
                "item"
              ],
              "select": {
                "$action": "item"
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "args": {},
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

