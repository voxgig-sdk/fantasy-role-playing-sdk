# FantasyRolePlaying SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "FantasyRolePlaying",
            "slug": "fantasy-role-playing",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://set.world/api",
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
            "short": "Description of the advantage",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "short": "Unique identifier for the advantage",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "short": "Name of the advantage",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
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
                    "lit": "advantages",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "advantages",
                ],
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/disadvantages",
                "segments": [
                  {
                    "lit": "disadvantages",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "disadvantages",
                ],
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/skills",
                "segments": [
                  {
                    "lit": "skills",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "skills",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "roll": {
        "fields": [
          {
            "name": "advantages",
            "short": "Character advantages",
            "type": "`$ARRAY`",
          },
          {
            "name": "attributes",
            "short": "Character attributes and stats",
            "type": "`$OBJECT`",
          },
          {
            "name": "class",
            "short": "Class of the character",
            "type": "`$STRING`",
          },
          {
            "name": "description",
            "short": "Description of the set",
            "type": "`$STRING`",
          },
          {
            "name": "disadvantages",
            "short": "Character disadvantages",
            "type": "`$ARRAY`",
          },
          {
            "name": "id",
            "short": "Unique identifier for the character",
            "type": "`$STRING`",
          },
          {
            "name": "items",
            "short": "Items included in the set",
            "type": "`$ARRAY`",
          },
          {
            "name": "level",
            "short": "Level of the character",
            "type": "`$INTEGER`",
          },
          {
            "name": "name",
            "short": "Name of the character",
            "type": "`$STRING`",
          },
          {
            "name": "race",
            "short": "Race of the character",
            "type": "`$STRING`",
          },
          {
            "name": "skills",
            "short": "Character skills",
            "type": "`$ARRAY`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
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
                    "lit": "roll",
                  },
                  {
                    "lit": "character",
                  },
                ],
                "select": {
                  "$action": "character",
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "roll",
                  "character",
                ],
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/roll/set",
                "segments": [
                  {
                    "lit": "roll",
                  },
                  {
                    "lit": "set",
                  },
                ],
                "select": {
                  "$action": "set",
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.items`",
                },
                "parts": [
                  "roll",
                  "set",
                ],
              },
            ],
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
                    "lit": "roll",
                  },
                  {
                    "lit": "item",
                  },
                ],
                "select": {
                  "$action": "item",
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.properties`",
                },
                "parts": [
                  "roll",
                  "item",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
