// Typed models for the FantasyRolePlaying SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Entity {
  description?: string
  id?: string
  name?: string
}

export type EntityListMatch = Partial<Entity>

export interface Roll {
  advantage?: any[]
  attribute?: Record<string, any>
  class?: string
  description?: string
  disadvantage?: any[]
  id?: string
  item?: any[]
  level?: number
  name?: string
  property?: Record<string, any>
  race?: string
  rarity?: string
  skill?: any[]
  type?: string
}

export type RollLoadMatch = Partial<Roll>

export type RollListMatch = Partial<Roll>

