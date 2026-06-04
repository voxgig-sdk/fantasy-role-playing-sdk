# FantasyRolePlaying SDK

Query and roll fantasy RPG characters, items, and sets over plain HTTP GET — JSON, CORS, no auth

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Fantasy Role Playing API

[Set](https://set.world/) is a free, stateless fantasy role-playing API. It generates characters, items, and item sets on demand, and exposes related systems for skills, crafting, and a simple orb-based economy.

What you get from the API:

- Character rolls with stats, skills, advantages, and disadvantages
- Item and set rolls with rarity tiers (F through S grades)
- Reference data covering skills, classes, and equipment slots
- Crafting and stat-boost mechanics tied to an orb economy
- Monster loot calculations driven by encounter difficulty

All endpoints are plain HTTP `GET` requests that return JSON. No authentication is required, and CORS is enabled so the API can be called directly from the browser. Endpoint specifications are published at `/api/spec`, with longer-form guides under `/api/skill` and `/api/craft-guide`.

## Try it

**TypeScript**
```bash
npm install fantasy-role-playing
```

**Python**
```bash
pip install fantasy-role-playing-sdk
```

**PHP**
```bash
composer require voxgig/fantasy-role-playing-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/fantasy-role-playing-sdk/go
```

**Ruby**
```bash
gem install fantasy-role-playing-sdk
```

**Lua**
```bash
luarocks install fantasy-role-playing-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { FantasyRolePlayingSDK } from 'fantasy-role-playing'

const client = new FantasyRolePlayingSDK({})

// List all entitys
const entitys = await client.Entity().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o fantasy-role-playing-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "fantasy-role-playing": {
      "command": "/abs/path/to/fantasy-role-playing-mcp"
    }
  }
}
```

## Entities

The API exposes 2 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Entity** | Reference resources describing the building blocks of the world — skills, classes, equipment slots and similar lookups served as JSON. | `/advantages` |
| **Roll** | Generators that produce randomised content on demand, including characters at `GET /api/roll/character` and item sets at `GET /api/roll/set`. | `/roll/character` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from fantasyroleplaying_sdk import FantasyRolePlayingSDK

client = FantasyRolePlayingSDK({})

# List all entitys
entitys, err = client.Entity(None).list(None, None)
```

### PHP

```php
<?php
require_once 'fantasyroleplaying_sdk.php';

$client = new FantasyRolePlayingSDK([]);

// List all entitys
[$entitys, $err] = $client->Entity(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/fantasy-role-playing-sdk/go"

client := sdk.NewFantasyRolePlayingSDK(map[string]any{})

// List all entitys
entitys, err := client.Entity(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "FantasyRolePlaying_sdk"

client = FantasyRolePlayingSDK.new({})

# List all entitys
entitys, err = client.Entity(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("fantasy-role-playing_sdk")

local client = sdk.new({})

-- List all entitys
local entitys, err = client:Entity(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = FantasyRolePlayingSDK.test()
const result = await client.Entity().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = FantasyRolePlayingSDK.test(None, None)
result, err = client.Entity(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = FantasyRolePlayingSDK::test(null, null);
[$result, $err] = $client->Entity(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Entity(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = FantasyRolePlayingSDK.test(nil, nil)
result, err = client.Entity(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Entity(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Fantasy Role Playing API

- Upstream: [https://set.world/](https://set.world/)
- API docs: [https://set.world/api/spec](https://set.world/api/spec)

- No formal licence is published on the homepage or docs.
- The service describes itself as freely usable: every character, item, and attribute is given through stateless query.
- No attribution requirement is stated, but linking back to set.world is courteous.
- Confirm terms with the operator before relying on the data in a commercial product.

---

Generated from the Fantasy Role Playing API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
