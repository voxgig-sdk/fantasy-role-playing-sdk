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

export interface EntityListMatch {
  description?: string
  id?: string
  name?: string
}

export interface Roll {
  advantages?: any[]
  attributes?: Record<string, any>
  class?: string
  description?: string
  disadvantages?: any[]
  id?: string
  items?: any[]
  level?: number
  name?: string
  race?: string
  skills?: any[]
}

export interface RollLoadMatch {
  advantages?: any[]
  attributes?: Record<string, any>
  class?: string
  description?: string
  disadvantages?: any[]
  id: string
  items?: any[]
  level?: number
  name?: string
  race?: string
  skills?: any[]

  // Selects a custom action instead of the plain load:
  //   'item'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface RollListMatch {
  advantages?: any[]
  attributes?: Record<string, any>
  class?: string
  description?: string
  disadvantages?: any[]
  id?: string
  items?: any[]
  level?: number
  name?: string
  race?: string
  skills?: any[]

  // Selects a custom action instead of the plain list:
  //   'character' | 'set'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

