
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'FantasyRolePlaying',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://set.world/api",

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
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "type": "`$STRING`"
        }
      ],
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
              "parts": [
                "advantages"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/disadvantages",
              "parts": [
                "disadvantages"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/skills",
              "parts": [
                "skills"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
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
          "type": "`$ARRAY`"
        },
        {
          "name": "attributes",
          "type": "`$OBJECT`"
        },
        {
          "name": "class",
          "type": "`$STRING`"
        },
        {
          "name": "description",
          "type": "`$STRING`"
        },
        {
          "name": "disadvantages",
          "type": "`$ARRAY`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "items",
          "type": "`$ARRAY`"
        },
        {
          "name": "level",
          "type": "`$INTEGER`"
        },
        {
          "name": "name",
          "type": "`$STRING`"
        },
        {
          "name": "race",
          "type": "`$STRING`"
        },
        {
          "name": "skills",
          "type": "`$ARRAY`"
        }
      ],
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
              }
            },
            {
              "args": {},
              "kind": "http",
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
                "res": "`body.items`"
              }
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
              "parts": [
                "roll",
                "item"
              ],
              "select": {
                "$action": "item"
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.properties`"
              }
            }
          ]
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

