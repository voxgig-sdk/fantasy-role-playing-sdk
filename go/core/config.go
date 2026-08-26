package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "FantasyRolePlaying",
			"slug": "fantasy-role-playing",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://set.world/api",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"entity": map[string]any{},
				"roll": map[string]any{},
			},
		},
		"entity": map[string]any{
			"entity": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "description",
						"short": "Description of the advantage",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "Unique identifier for the advantage",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "Name of the advantage",
						"type": "`$STRING`",
					},
				},
				"name": "entity",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/advantages",
								"parts": []any{
									"advantages",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/disadvantages",
								"parts": []any{
									"disadvantages",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/skills",
								"parts": []any{
									"skills",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"roll": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "advantages",
						"short": "Character advantages",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "attributes",
						"short": "Character attributes and stats",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "class",
						"short": "Class of the character",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"short": "Description of the set",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "disadvantages",
						"short": "Character disadvantages",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "id",
						"short": "Unique identifier for the character",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "items",
						"short": "Items included in the set",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "level",
						"short": "Level of the character",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "name",
						"short": "Name of the character",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "race",
						"short": "Race of the character",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "skills",
						"short": "Character skills",
						"type": "`$ARRAY`",
					},
				},
				"name": "roll",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/roll/character",
								"parts": []any{
									"roll",
									"character",
								},
								"select": map[string]any{
									"$action": "character",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/roll/set",
								"parts": []any{
									"roll",
									"set",
								},
								"select": map[string]any{
									"$action": "set",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/roll/item",
								"parts": []any{
									"roll",
									"item",
								},
								"select": map[string]any{
									"$action": "item",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.properties`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
