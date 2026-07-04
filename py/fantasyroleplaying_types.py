# Typed models for the FantasyRolePlaying SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Entity:
    description: Optional[str] = None
    id: Optional[str] = None
    name: Optional[str] = None


@dataclass
class EntityListMatch:
    description: Optional[str] = None
    id: Optional[str] = None
    name: Optional[str] = None


@dataclass
class Roll:
    advantage: Optional[list] = None
    attribute: Optional[dict] = None
    description: Optional[str] = None
    disadvantage: Optional[list] = None
    id: Optional[str] = None
    item: Optional[list] = None
    level: Optional[int] = None
    name: Optional[str] = None
    property: Optional[dict] = None
    race: Optional[str] = None
    rarity: Optional[str] = None
    skill: Optional[list] = None
    type: Optional[str] = None


@dataclass
class RollLoadMatch:
    advantage: Optional[list] = None
    attribute: Optional[dict] = None
    description: Optional[str] = None
    disadvantage: Optional[list] = None
    id: Optional[str] = None
    item: Optional[list] = None
    level: Optional[int] = None
    name: Optional[str] = None
    property: Optional[dict] = None
    race: Optional[str] = None
    rarity: Optional[str] = None
    skill: Optional[list] = None
    type: Optional[str] = None


@dataclass
class RollListMatch:
    advantage: Optional[list] = None
    attribute: Optional[dict] = None
    description: Optional[str] = None
    disadvantage: Optional[list] = None
    id: Optional[str] = None
    item: Optional[list] = None
    level: Optional[int] = None
    name: Optional[str] = None
    property: Optional[dict] = None
    race: Optional[str] = None
    rarity: Optional[str] = None
    skill: Optional[list] = None
    type: Optional[str] = None

