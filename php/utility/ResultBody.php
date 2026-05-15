<?php
declare(strict_types=1);

// FantasyRolePlaying SDK utility: result_body

class FantasyRolePlayingResultBody
{
    public static function call(FantasyRolePlayingContext $ctx): ?FantasyRolePlayingResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
