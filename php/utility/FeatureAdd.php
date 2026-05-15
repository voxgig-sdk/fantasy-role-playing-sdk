<?php
declare(strict_types=1);

// FantasyRolePlaying SDK utility: feature_add

class FantasyRolePlayingFeatureAdd
{
    public static function call(FantasyRolePlayingContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
