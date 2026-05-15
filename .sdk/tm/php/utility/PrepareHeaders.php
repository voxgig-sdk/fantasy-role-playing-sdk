<?php
declare(strict_types=1);

// FantasyRolePlaying SDK utility: prepare_headers

class FantasyRolePlayingPrepareHeaders
{
    public static function call(FantasyRolePlayingContext $ctx): array
    {
        $options = $ctx->client->options_map();
        $headers = \Voxgig\Struct\Struct::getprop($options, 'headers');
        if (!$headers) {
            return [];
        }
        $out = \Voxgig\Struct\Struct::clone($headers);
        return is_array($out) ? $out : [];
    }
}
