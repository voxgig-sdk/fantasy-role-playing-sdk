<?php
declare(strict_types=1);

// FantasyRolePlaying SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class FantasyRolePlayingMakeContext
{
    public static function call(array $ctxmap, ?FantasyRolePlayingContext $basectx): FantasyRolePlayingContext
    {
        return new FantasyRolePlayingContext($ctxmap, $basectx);
    }
}
