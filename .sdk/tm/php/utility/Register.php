<?php
declare(strict_types=1);

// FantasyRolePlaying SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

FantasyRolePlayingUtility::setRegistrar(function (FantasyRolePlayingUtility $u): void {
    $u->clean = [FantasyRolePlayingClean::class, 'call'];
    $u->done = [FantasyRolePlayingDone::class, 'call'];
    $u->make_error = [FantasyRolePlayingMakeError::class, 'call'];
    $u->feature_add = [FantasyRolePlayingFeatureAdd::class, 'call'];
    $u->feature_hook = [FantasyRolePlayingFeatureHook::class, 'call'];
    $u->feature_init = [FantasyRolePlayingFeatureInit::class, 'call'];
    $u->fetcher = [FantasyRolePlayingFetcher::class, 'call'];
    $u->make_fetch_def = [FantasyRolePlayingMakeFetchDef::class, 'call'];
    $u->make_context = [FantasyRolePlayingMakeContext::class, 'call'];
    $u->make_options = [FantasyRolePlayingMakeOptions::class, 'call'];
    $u->make_request = [FantasyRolePlayingMakeRequest::class, 'call'];
    $u->make_response = [FantasyRolePlayingMakeResponse::class, 'call'];
    $u->make_result = [FantasyRolePlayingMakeResult::class, 'call'];
    $u->make_point = [FantasyRolePlayingMakePoint::class, 'call'];
    $u->make_spec = [FantasyRolePlayingMakeSpec::class, 'call'];
    $u->make_url = [FantasyRolePlayingMakeUrl::class, 'call'];
    $u->param = [FantasyRolePlayingParam::class, 'call'];
    $u->prepare_auth = [FantasyRolePlayingPrepareAuth::class, 'call'];
    $u->prepare_body = [FantasyRolePlayingPrepareBody::class, 'call'];
    $u->prepare_headers = [FantasyRolePlayingPrepareHeaders::class, 'call'];
    $u->prepare_method = [FantasyRolePlayingPrepareMethod::class, 'call'];
    $u->prepare_params = [FantasyRolePlayingPrepareParams::class, 'call'];
    $u->prepare_path = [FantasyRolePlayingPreparePath::class, 'call'];
    $u->prepare_query = [FantasyRolePlayingPrepareQuery::class, 'call'];
    $u->result_basic = [FantasyRolePlayingResultBasic::class, 'call'];
    $u->result_body = [FantasyRolePlayingResultBody::class, 'call'];
    $u->result_headers = [FantasyRolePlayingResultHeaders::class, 'call'];
    $u->transform_request = [FantasyRolePlayingTransformRequest::class, 'call'];
    $u->transform_response = [FantasyRolePlayingTransformResponse::class, 'call'];
});
