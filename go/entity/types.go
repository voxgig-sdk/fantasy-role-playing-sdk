// Typed models for the FantasyRolePlaying SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Entity is the typed data model for the entity entity.
type Entity struct {
	Description *string `json:"description,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

// EntityListMatch mirrors the entity fields as an all-optional match
// filter (Go analog of Partial<Entity>).
type EntityListMatch struct {
	Description *string `json:"description,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

// Roll is the typed data model for the roll entity.
type Roll struct {
	Advantage *[]any `json:"advantage,omitempty"`
	Attribute *map[string]any `json:"attribute,omitempty"`
	Class *string `json:"class,omitempty"`
	Description *string `json:"description,omitempty"`
	Disadvantage *[]any `json:"disadvantage,omitempty"`
	Id *string `json:"id,omitempty"`
	Item *[]any `json:"item,omitempty"`
	Level *int `json:"level,omitempty"`
	Name *string `json:"name,omitempty"`
	Property *map[string]any `json:"property,omitempty"`
	Race *string `json:"race,omitempty"`
	Rarity *string `json:"rarity,omitempty"`
	Skill *[]any `json:"skill,omitempty"`
	Type *string `json:"type,omitempty"`
}

// RollLoadMatch mirrors the roll fields as an all-optional match
// filter (Go analog of Partial<Roll>).
type RollLoadMatch struct {
	Advantage *[]any `json:"advantage,omitempty"`
	Attribute *map[string]any `json:"attribute,omitempty"`
	Class *string `json:"class,omitempty"`
	Description *string `json:"description,omitempty"`
	Disadvantage *[]any `json:"disadvantage,omitempty"`
	Id *string `json:"id,omitempty"`
	Item *[]any `json:"item,omitempty"`
	Level *int `json:"level,omitempty"`
	Name *string `json:"name,omitempty"`
	Property *map[string]any `json:"property,omitempty"`
	Race *string `json:"race,omitempty"`
	Rarity *string `json:"rarity,omitempty"`
	Skill *[]any `json:"skill,omitempty"`
	Type *string `json:"type,omitempty"`
}

// RollListMatch mirrors the roll fields as an all-optional match
// filter (Go analog of Partial<Roll>).
type RollListMatch struct {
	Advantage *[]any `json:"advantage,omitempty"`
	Attribute *map[string]any `json:"attribute,omitempty"`
	Class *string `json:"class,omitempty"`
	Description *string `json:"description,omitempty"`
	Disadvantage *[]any `json:"disadvantage,omitempty"`
	Id *string `json:"id,omitempty"`
	Item *[]any `json:"item,omitempty"`
	Level *int `json:"level,omitempty"`
	Name *string `json:"name,omitempty"`
	Property *map[string]any `json:"property,omitempty"`
	Race *string `json:"race,omitempty"`
	Rarity *string `json:"rarity,omitempty"`
	Skill *[]any `json:"skill,omitempty"`
	Type *string `json:"type,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
