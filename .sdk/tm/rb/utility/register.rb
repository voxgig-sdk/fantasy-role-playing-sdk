# FantasyRolePlaying SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

FantasyRolePlayingUtility.registrar = ->(u) {
  u.clean = FantasyRolePlayingUtilities::Clean
  u.done = FantasyRolePlayingUtilities::Done
  u.make_error = FantasyRolePlayingUtilities::MakeError
  u.feature_add = FantasyRolePlayingUtilities::FeatureAdd
  u.feature_hook = FantasyRolePlayingUtilities::FeatureHook
  u.feature_init = FantasyRolePlayingUtilities::FeatureInit
  u.fetcher = FantasyRolePlayingUtilities::Fetcher
  u.make_fetch_def = FantasyRolePlayingUtilities::MakeFetchDef
  u.make_context = FantasyRolePlayingUtilities::MakeContext
  u.make_options = FantasyRolePlayingUtilities::MakeOptions
  u.make_request = FantasyRolePlayingUtilities::MakeRequest
  u.make_response = FantasyRolePlayingUtilities::MakeResponse
  u.make_result = FantasyRolePlayingUtilities::MakeResult
  u.make_point = FantasyRolePlayingUtilities::MakePoint
  u.make_spec = FantasyRolePlayingUtilities::MakeSpec
  u.make_url = FantasyRolePlayingUtilities::MakeUrl
  u.param = FantasyRolePlayingUtilities::Param
  u.prepare_auth = FantasyRolePlayingUtilities::PrepareAuth
  u.prepare_body = FantasyRolePlayingUtilities::PrepareBody
  u.prepare_headers = FantasyRolePlayingUtilities::PrepareHeaders
  u.prepare_method = FantasyRolePlayingUtilities::PrepareMethod
  u.prepare_params = FantasyRolePlayingUtilities::PrepareParams
  u.prepare_path = FantasyRolePlayingUtilities::PreparePath
  u.prepare_query = FantasyRolePlayingUtilities::PrepareQuery
  u.result_basic = FantasyRolePlayingUtilities::ResultBasic
  u.result_body = FantasyRolePlayingUtilities::ResultBody
  u.result_headers = FantasyRolePlayingUtilities::ResultHeaders
  u.transform_request = FantasyRolePlayingUtilities::TransformRequest
  u.transform_response = FantasyRolePlayingUtilities::TransformResponse
}
