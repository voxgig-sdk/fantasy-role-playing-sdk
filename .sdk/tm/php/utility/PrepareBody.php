<?php
declare(strict_types=1);

// FantasyRolePlaying SDK utility: prepare_body

class FantasyRolePlayingPrepareBody
{
    public static function call(FantasyRolePlayingContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
