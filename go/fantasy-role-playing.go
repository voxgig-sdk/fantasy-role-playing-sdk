package voxgigfantasyroleplayingsdk

import (
	"github.com/voxgig-sdk/fantasy-role-playing-sdk/core"
	"github.com/voxgig-sdk/fantasy-role-playing-sdk/entity"
	"github.com/voxgig-sdk/fantasy-role-playing-sdk/feature"
	_ "github.com/voxgig-sdk/fantasy-role-playing-sdk/utility"
)

// Type aliases preserve external API.
type FantasyRolePlayingSDK = core.FantasyRolePlayingSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type FantasyRolePlayingEntity = core.FantasyRolePlayingEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type FantasyRolePlayingError = core.FantasyRolePlayingError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewEntityEntityFunc = func(client *core.FantasyRolePlayingSDK, entopts map[string]any) core.FantasyRolePlayingEntity {
		return entity.NewEntityEntity(client, entopts)
	}
	core.NewRollEntityFunc = func(client *core.FantasyRolePlayingSDK, entopts map[string]any) core.FantasyRolePlayingEntity {
		return entity.NewRollEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewFantasyRolePlayingSDK = core.NewFantasyRolePlayingSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
