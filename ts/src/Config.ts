
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

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'FantasyRolePlaying',
        slug: "fantasy-role-playing",
    version: "0.0.1",
    target: "ts",

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

