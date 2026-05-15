<?php
declare(strict_types=1);

// FantasyRolePlaying SDK utility: result_headers

class FantasyRolePlayingResultHeaders
{
    public static function call(FantasyRolePlayingContext $ctx): ?FantasyRolePlayingResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
