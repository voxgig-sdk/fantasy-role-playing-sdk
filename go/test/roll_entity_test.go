package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/fantasy-role-playing-sdk/go"
	"github.com/voxgig-sdk/fantasy-role-playing-sdk/go/core"

	vs "github.com/voxgig-sdk/fantasy-role-playing-sdk/go/utility/struct"
)

func TestRollEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Roll(nil)
		if ent == nil {
			t.Fatal("expected non-nil RollEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := rollBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "roll." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set FANTASYROLEPLAYING_TEST_ROLL_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		rollRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.roll", setup.data)))
		var rollRef01Data map[string]any
		if len(rollRef01DataRaw) > 0 {
			rollRef01Data = core.ToMapAny(rollRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = rollRef01Data

		// LIST
		rollRef01Ent := client.Roll(nil)
		rollRef01Match := map[string]any{}

		rollRef01ListResult, err := rollRef01Ent.List(rollRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, rollRef01ListOk := rollRef01ListResult.([]any)
		if !rollRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", rollRef01ListResult)
		}

		// LOAD
		rollRef01MatchDt0 := map[string]any{
			"id": rollRef01Data["id"],
		}
		rollRef01DataDt0Loaded, err := rollRef01Ent.Load(rollRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		rollRef01DataDt0LoadResult := core.ToMapAny(rollRef01DataDt0Loaded)
		if rollRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if rollRef01DataDt0LoadResult["id"] != rollRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func rollBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "roll", "RollTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read roll test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse roll test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"roll01", "roll02", "roll03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("FANTASYROLEPLAYING_TEST_ROLL_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"FANTASYROLEPLAYING_TEST_ROLL_ENTID": idmap,
		"FANTASYROLEPLAYING_TEST_LIVE":      "FALSE",
		"FANTASYROLEPLAYING_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["FANTASYROLEPLAYING_TEST_ROLL_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["FANTASYROLEPLAYING_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
			},
			extra,
		})
		client = sdk.NewFantasyRolePlayingSDK(core.ToMapAny(mergedOpts))
	}

	live := env["FANTASYROLEPLAYING_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["FANTASYROLEPLAYING_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
