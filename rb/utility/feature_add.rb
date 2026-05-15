# FantasyRolePlaying SDK utility: feature_add
module FantasyRolePlayingUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
