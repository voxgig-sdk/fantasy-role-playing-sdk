# FantasyRolePlaying TypeScript SDK Reference

Complete API reference for the FantasyRolePlaying TypeScript SDK.


## FantasyRolePlayingSDK

### Constructor

```ts
new FantasyRolePlayingSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `FantasyRolePlayingSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = FantasyRolePlayingSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `FantasyRolePlayingSDK` instance in test mode.


### Instance Methods

#### `Entity(data?: object)`

Create a new `Entity` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EntityEntity` instance.

#### `Roll(data?: object)`

Create a new `Roll` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RollEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `FantasyRolePlayingSDK.test()`.

**Returns:** `FantasyRolePlayingSDK` instance in test mode.


---

## EntityEntity

```ts
const entity = client.Entity()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No | Description of the advantage |
| `id` | `string` | No | Unique identifier for the advantage |
| `name` | `string` | No | Name of the advantage |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Entity().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EntityEntity` instance with the same client and
options.

#### `client()`

Return the parent `FantasyRolePlayingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RollEntity

```ts
const roll = client.Roll()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `advantages` | `any[]` | No | Character advantages |
| `attributes` | `Record<string, any>` | No | Character attributes and stats |
| `class` | `string` | No | Class of the character |
| `description` | `string` | No | Description of the set |
| `disadvantages` | `any[]` | No | Character disadvantages |
| `id` | `string` | No | Unique identifier for the character |
| `items` | `any[]` | No | Items included in the set |
| `level` | `number` | No | Level of the character |
| `name` | `string` | No | Name of the character |
| `race` | `string` | No | Race of the character |
| `skills` | `any[]` | No | Character skills |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `character` | `/roll/character` | `client.Roll().list({ $action: 'character', ... })` |
| `set` | `/roll/set` | `client.Roll().list({ $action: 'set', ... })` |
| `item` | `/roll/item` | `client.Roll().load({ $action: 'item', ... })` |

An action returns that action's OWN response, which is not necessarily a
Roll record — check the API definition for its shape.

```ts
const result = await client.Roll().list({
  $action: 'character',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Roll().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Roll().load({ id: 'roll_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RollEntity` instance with the same client and
options.

#### `client()`

Return the parent `FantasyRolePlayingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new FantasyRolePlayingSDK({
  feature: {
    test: { active: true },
  }
})
```

