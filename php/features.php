<?php
declare(strict_types=1);

// FantasyRolePlaying SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class FantasyRolePlayingFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new FantasyRolePlayingBaseFeature();
            case "test":
                return new FantasyRolePlayingTestFeature();
            default:
                return new FantasyRolePlayingBaseFeature();
        }
    }
}
