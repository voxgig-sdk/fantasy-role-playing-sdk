# FantasyRolePlaying SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module FantasyRolePlayingFeatures
  def self.make_feature(name)
    case name
    when "base"
      FantasyRolePlayingBaseFeature.new
    when "ratelimit"
      FantasyRolePlayingRatelimitFeature.new
    when "retry"
      FantasyRolePlayingRetryFeature.new
    when "test"
      FantasyRolePlayingTestFeature.new
    when "timeout"
      FantasyRolePlayingTimeoutFeature.new
    else
      FantasyRolePlayingBaseFeature.new
    end
  end
end
