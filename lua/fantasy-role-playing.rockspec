package = "voxgig-sdk-fantasy-role-playing"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/fantasy-role-playing-sdk.git"
}
description = {
  summary = "FantasyRolePlaying SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["fantasy-role-playing_sdk"] = "fantasy-role-playing_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
