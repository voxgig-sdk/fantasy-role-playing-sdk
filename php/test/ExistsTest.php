<?php
declare(strict_types=1);

// FantasyRolePlaying SDK exists test

require_once __DIR__ . '/../fantasyroleplaying_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = FantasyRolePlayingSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
