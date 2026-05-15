# FantasyRolePlaying SDK utility: make_context
require_relative '../core/context'
module FantasyRolePlayingUtilities
  MakeContext = ->(ctxmap, basectx) {
    FantasyRolePlayingContext.new(ctxmap, basectx)
  }
end
