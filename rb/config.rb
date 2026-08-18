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
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
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
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "type" => "`$STRING`",
            },
            {
              "name" => "name",
              "type" => "`$STRING`",
            },
          ],
          "name" => "entity",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/advantages",
                  "parts" => [
                    "advantages",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/disadvantages",
                  "parts" => [
                    "disadvantages",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/skills",
                  "parts" => [
                    "skills",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "roll" => {
          "fields" => [
            {
              "name" => "advantages",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "attributes",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "class",
              "type" => "`$STRING`",
            },
            {
              "name" => "description",
              "type" => "`$STRING`",
            },
            {
              "name" => "disadvantages",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "id",
              "type" => "`$STRING`",
            },
            {
              "name" => "items",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "level",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "name",
              "type" => "`$STRING`",
            },
            {
              "name" => "race",
              "type" => "`$STRING`",
            },
            {
              "name" => "skills",
              "type" => "`$ARRAY`",
            },
          ],
          "name" => "roll",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/roll/character",
                  "parts" => [
                    "roll",
                    "character",
                  ],
                  "select" => {
                    "$action" => "character",
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/roll/set",
                  "parts" => [
                    "roll",
                    "set",
                  ],
                  "select" => {
                    "$action" => "set",
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.items`",
                  },
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/roll/item",
                  "parts" => [
                    "roll",
                    "item",
                  ],
                  "select" => {
                    "$action" => "item",
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.properties`",
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
