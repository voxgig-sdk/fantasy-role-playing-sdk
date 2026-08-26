-- FantasyRolePlaying SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "FantasyRolePlaying",
      slug = "fantasy-role-playing",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://set.world/api",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["entity"] = {},
        ["roll"] = {},
      },
    },
    entity = {
      ["entity"] = {
        ["fields"] = {
          {
            ["name"] = "description",
            ["short"] = "Description of the advantage",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["short"] = "Unique identifier for the advantage",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["short"] = "Name of the advantage",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "entity",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/advantages",
                ["parts"] = {
                  "advantages",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/disadvantages",
                ["parts"] = {
                  "disadvantages",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/skills",
                ["parts"] = {
                  "skills",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["roll"] = {
        ["fields"] = {
          {
            ["name"] = "advantages",
            ["short"] = "Character advantages",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "attributes",
            ["short"] = "Character attributes and stats",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "class",
            ["short"] = "Class of the character",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "description",
            ["short"] = "Description of the set",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "disadvantages",
            ["short"] = "Character disadvantages",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "id",
            ["short"] = "Unique identifier for the character",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "items",
            ["short"] = "Items included in the set",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "level",
            ["short"] = "Level of the character",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "name",
            ["short"] = "Name of the character",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "race",
            ["short"] = "Race of the character",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "skills",
            ["short"] = "Character skills",
            ["type"] = "`$ARRAY`",
          },
        },
        ["name"] = "roll",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/roll/character",
                ["parts"] = {
                  "roll",
                  "character",
                },
                ["select"] = {
                  ["$action"] = "character",
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/roll/set",
                ["parts"] = {
                  "roll",
                  "set",
                },
                ["select"] = {
                  ["$action"] = "set",
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.items`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/roll/item",
                ["parts"] = {
                  "roll",
                  "item",
                },
                ["select"] = {
                  ["$action"] = "item",
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.properties`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
