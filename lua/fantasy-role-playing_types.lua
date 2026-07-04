-- Typed models for the FantasyRolePlaying SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Entity
---@field description? string
---@field id? string
---@field name? string

---@class EntityListMatch

---@class Roll
---@field advantage? table
---@field attribute? table
---@field class? string
---@field description? string
---@field disadvantage? table
---@field id? string
---@field item? table
---@field level? number
---@field name? string
---@field property? table
---@field race? string
---@field rarity? string
---@field skill? table
---@field type? string

---@class RollLoadMatch

---@class RollListMatch

local M = {}

return M
