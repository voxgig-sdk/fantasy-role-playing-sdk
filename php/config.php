<?php
declare(strict_types=1);

// FantasyRolePlaying SDK configuration

class FantasyRolePlayingConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "FantasyRolePlaying",
                "slug" => "fantasy-role-playing",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
          'transport' => 'base',
        ],
            ],
            "options" => [
                "base" => "https://set.world/api",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "entity" => [],
                    "roll" => [],
                ],
            ],
            "entity" => [
        'entity' => [
          'fields' => [
            [
              'name' => 'description',
              'short' => 'Description of the advantage',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'short' => 'Unique identifier for the advantage',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name',
              'short' => 'Name of the advantage',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'entity',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/advantages',
                  'parts' => [
                    'advantages',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/disadvantages',
                  'parts' => [
                    'disadvantages',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/skills',
                  'parts' => [
                    'skills',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'roll' => [
          'fields' => [
            [
              'name' => 'advantages',
              'short' => 'Character advantages',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'attributes',
              'short' => 'Character attributes and stats',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'class',
              'short' => 'Class of the character',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'description',
              'short' => 'Description of the set',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'disadvantages',
              'short' => 'Character disadvantages',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'id',
              'short' => 'Unique identifier for the character',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'items',
              'short' => 'Items included in the set',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'level',
              'short' => 'Level of the character',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'name',
              'short' => 'Name of the character',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'race',
              'short' => 'Race of the character',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'skills',
              'short' => 'Character skills',
              'type' => '`$ARRAY`',
            ],
          ],
          'name' => 'roll',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/roll/character',
                  'parts' => [
                    'roll',
                    'character',
                  ],
                  'select' => [
                    '$action' => 'character',
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/roll/set',
                  'parts' => [
                    'roll',
                    'set',
                  ],
                  'select' => [
                    '$action' => 'set',
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.items`',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/roll/item',
                  'parts' => [
                    'roll',
                    'item',
                  ],
                  'select' => [
                    '$action' => 'item',
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.properties`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return FantasyRolePlayingFeatures::make_feature($name);
    }
}
