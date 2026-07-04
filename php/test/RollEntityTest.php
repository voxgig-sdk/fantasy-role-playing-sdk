<?php
declare(strict_types=1);

// Roll entity test

require_once __DIR__ . '/../fantasyroleplaying_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class RollEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = FantasyRolePlayingSDK::test(null, null);
        $ent = $testsdk->Roll(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = roll_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["list", "load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "roll." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set FANTASYROLEPLAYING_TEST_ROLL_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $roll_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.roll")));
        $roll_ref01_data = null;
        if (count($roll_ref01_data_raw) > 0) {
            $roll_ref01_data = Helpers::to_map($roll_ref01_data_raw[0][1]);
        }

        // LIST
        $roll_ref01_ent = $client->Roll(null);
        $roll_ref01_match = [];

        $roll_ref01_list_result = $roll_ref01_ent->list($roll_ref01_match, null);
        $this->assertIsArray($roll_ref01_list_result);

        // LOAD
        $roll_ref01_match_dt0 = [
            "id" => $roll_ref01_data["id"],
        ];
        $roll_ref01_data_dt0_loaded = $roll_ref01_ent->load($roll_ref01_match_dt0, null);
        $roll_ref01_data_dt0_load_result = Helpers::to_map($roll_ref01_data_dt0_loaded);
        $this->assertNotNull($roll_ref01_data_dt0_load_result);
        $this->assertEquals($roll_ref01_data_dt0_load_result["id"], $roll_ref01_data["id"]);

    }
}

function roll_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/roll/RollTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = FantasyRolePlayingSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["roll01", "roll02", "roll03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("FANTASYROLEPLAYING_TEST_ROLL_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "FANTASYROLEPLAYING_TEST_ROLL_ENTID" => $idmap,
        "FANTASYROLEPLAYING_TEST_LIVE" => "FALSE",
        "FANTASYROLEPLAYING_TEST_EXPLAIN" => "FALSE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["FANTASYROLEPLAYING_TEST_ROLL_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["FANTASYROLEPLAYING_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            [
            ],
            $extra ?? [],
        ]);
        $client = new FantasyRolePlayingSDK(Helpers::to_map($merged_opts));
    }

    $live = $env["FANTASYROLEPLAYING_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["FANTASYROLEPLAYING_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
