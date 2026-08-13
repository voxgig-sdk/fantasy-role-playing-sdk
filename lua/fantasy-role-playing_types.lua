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
---@field description? string
---@field id? string
---@field name? string

---@class Roll
---@field advantages? table
---@field attributes? table
---@field class? string
---@field description? string
---@field disadvantages? table
---@field id? string
---@field items? table
---@field level? number
---@field name? string
---@field race? string
---@field skills? table

---@class RollLoadMatch
---@field advantages? table
---@field attributes? table
---@field class? string
---@field description? string
---@field disadvantages? table
---@field id string
---@field items? table
---@field level? number
---@field name? string
---@field race? string
---@field skills? table

---@class RollListMatch
---@field advantages? table
---@field attributes? table
---@field class? string
---@field description? string
---@field disadvantages? table
---@field id? string
---@field items? table
---@field level? number
---@field name? string
---@field race? string
---@field skills? table

local M = {}

return M
