# FantasyRolePlaying SDK configuration

module FantasyRolePlayingConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "FantasyRolePlaying",
        "slug" => "fantasy-role-playing",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://set.world/api",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "entity" => {},
          "roll" => {},
        },
      },
      "entity" => {
        "entity" => {
          "fields" => [
            {
              "name" => "description",
              "title" => "Description",
              "type" => "`$STRING`",
              "short" => "Description of the advantage",
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
              "short" => "Unique identifier for the advantage",
            },
            {
              "name" => "name",
              "title" => "Name",
              "type" => "`$STRING`",
              "short" => "Name of the advantage",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "entity",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/advantages",
                  "segments" => [
                    {
                      "lit" => "advantages",
                    },
                  ],
                  "parts" => [
                    "advantages",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/disadvantages",
                  "segments" => [
                    {
                      "lit" => "disadvantages",
                    },
                  ],
                  "parts" => [
                    "disadvantages",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/skills",
                  "segments" => [
                    {
                      "lit" => "skills",
                    },
                  ],
                  "parts" => [
                    "skills",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "roll" => {
          "fields" => [],
          "name" => "roll",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/roll/character",
                  "segments" => [
                    {
                      "lit" => "roll",
                    },
                    {
                      "lit" => "character",
                    },
                  ],
                  "parts" => [
                    "roll",
                    "character",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {
                    "$action" => "character",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/roll/set",
                  "segments" => [
                    {
                      "lit" => "roll",
                    },
                    {
                      "lit" => "set",
                    },
                  ],
                  "parts" => [
                    "roll",
                    "set",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.items`",
                  },
                  "args" => {},
                  "select" => {
                    "$action" => "set",
                  },
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/roll/item",
                  "segments" => [
                    {
                      "lit" => "roll",
                    },
                    {
                      "lit" => "item",
                    },
                  ],
                  "parts" => [
                    "roll",
                    "item",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.properties`",
                  },
                  "args" => {},
                  "select" => {
                    "$action" => "item",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    FantasyRolePlayingFeatures.make_feature(name)
  end
end
