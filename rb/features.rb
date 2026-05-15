# FantasyRolePlaying SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module FantasyRolePlayingFeatures
  def self.make_feature(name)
    case name
    when "base"
      FantasyRolePlayingBaseFeature.new
    when "test"
      FantasyRolePlayingTestFeature.new
    else
      FantasyRolePlayingBaseFeature.new
    end
  end
end
