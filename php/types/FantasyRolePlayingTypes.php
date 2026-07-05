<?php
declare(strict_types=1);

// Typed models for the FantasyRolePlaying SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Entity entity data model. */
class Entity
{
    public ?string $description = null;
    public ?string $id = null;
    public ?string $name = null;
}

/** Request payload for Entity#list. */
class EntityListMatch
{
    public ?string $description = null;
    public ?string $id = null;
    public ?string $name = null;
}

/** Roll entity data model. */
class Roll
{
    public ?array $advantage = null;
    public ?array $attribute = null;
    public ?string $class = null;
    public ?string $description = null;
    public ?array $disadvantage = null;
    public ?string $id = null;
    public ?array $item = null;
    public ?int $level = null;
    public ?string $name = null;
    public ?array $property = null;
    public ?string $race = null;
    public ?string $rarity = null;
    public ?array $skill = null;
    public ?string $type = null;
}

/** Request payload for Roll#load. */
class RollLoadMatch
{
    public ?array $advantage = null;
    public ?array $attribute = null;
    public ?string $class = null;
    public ?string $description = null;
    public ?array $disadvantage = null;
    public string $id;
    public ?array $item = null;
    public ?int $level = null;
    public ?string $name = null;
    public ?array $property = null;
    public ?string $race = null;
    public ?string $rarity = null;
    public ?array $skill = null;
    public ?string $type = null;
}

/** Request payload for Roll#list. */
class RollListMatch
{
    public ?array $advantage = null;
    public ?array $attribute = null;
    public ?string $class = null;
    public ?string $description = null;
    public ?array $disadvantage = null;
    public ?string $id = null;
    public ?array $item = null;
    public ?int $level = null;
    public ?string $name = null;
    public ?array $property = null;
    public ?string $race = null;
    public ?string $rarity = null;
    public ?array $skill = null;
    public ?string $type = null;
}

