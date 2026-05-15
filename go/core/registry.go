package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewEntityEntityFunc func(client *FantasyRolePlayingSDK, entopts map[string]any) FantasyRolePlayingEntity

var NewRollEntityFunc func(client *FantasyRolePlayingSDK, entopts map[string]any) FantasyRolePlayingEntity

