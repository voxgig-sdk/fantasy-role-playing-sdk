<?php
declare(strict_types=1);

// FantasyRolePlaying SDK base feature

class FantasyRolePlayingBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(FantasyRolePlayingContext $ctx, array $options): void {}
    public function PostConstruct(FantasyRolePlayingContext $ctx): void {}
    public function PostConstructEntity(FantasyRolePlayingContext $ctx): void {}
    public function SetData(FantasyRolePlayingContext $ctx): void {}
    public function GetData(FantasyRolePlayingContext $ctx): void {}
    public function GetMatch(FantasyRolePlayingContext $ctx): void {}
    public function SetMatch(FantasyRolePlayingContext $ctx): void {}
    public function PrePoint(FantasyRolePlayingContext $ctx): void {}
    public function PreSpec(FantasyRolePlayingContext $ctx): void {}
    public function PreRequest(FantasyRolePlayingContext $ctx): void {}
    public function PreResponse(FantasyRolePlayingContext $ctx): void {}
    public function PreResult(FantasyRolePlayingContext $ctx): void {}
    public function PreDone(FantasyRolePlayingContext $ctx): void {}
    public function PreUnexpected(FantasyRolePlayingContext $ctx): void {}
}
