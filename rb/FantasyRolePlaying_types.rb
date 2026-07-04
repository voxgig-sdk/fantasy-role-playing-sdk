# frozen_string_literal: true

# Typed models for the FantasyRolePlaying SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Entity entity data model.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
Entity = Struct.new(
  :description,
  :id,
  :name,
  keyword_init: true
)

# Match filter for Entity#list (any subset of Entity fields).
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
EntityListMatch = Struct.new(
  :description,
  :id,
  :name,
  keyword_init: true
)

# Roll entity data model.
#
# @!attribute [rw] advantage
#   @return [Array, nil]
#
# @!attribute [rw] attribute
#   @return [Hash, nil]
#
# @!attribute [rw] class
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] disadvantage
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] item
#   @return [Array, nil]
#
# @!attribute [rw] level
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] property
#   @return [Hash, nil]
#
# @!attribute [rw] race
#   @return [String, nil]
#
# @!attribute [rw] rarity
#   @return [String, nil]
#
# @!attribute [rw] skill
#   @return [Array, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
Roll = Struct.new(
  :advantage,
  :attribute,
  :class,
  :description,
  :disadvantage,
  :id,
  :item,
  :level,
  :name,
  :property,
  :race,
  :rarity,
  :skill,
  :type,
  keyword_init: true
)

# Match filter for Roll#load (any subset of Roll fields).
#
# @!attribute [rw] advantage
#   @return [Array, nil]
#
# @!attribute [rw] attribute
#   @return [Hash, nil]
#
# @!attribute [rw] class
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] disadvantage
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] item
#   @return [Array, nil]
#
# @!attribute [rw] level
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] property
#   @return [Hash, nil]
#
# @!attribute [rw] race
#   @return [String, nil]
#
# @!attribute [rw] rarity
#   @return [String, nil]
#
# @!attribute [rw] skill
#   @return [Array, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
RollLoadMatch = Struct.new(
  :advantage,
  :attribute,
  :class,
  :description,
  :disadvantage,
  :id,
  :item,
  :level,
  :name,
  :property,
  :race,
  :rarity,
  :skill,
  :type,
  keyword_init: true
)

# Match filter for Roll#list (any subset of Roll fields).
#
# @!attribute [rw] advantage
#   @return [Array, nil]
#
# @!attribute [rw] attribute
#   @return [Hash, nil]
#
# @!attribute [rw] class
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] disadvantage
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] item
#   @return [Array, nil]
#
# @!attribute [rw] level
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] property
#   @return [Hash, nil]
#
# @!attribute [rw] race
#   @return [String, nil]
#
# @!attribute [rw] rarity
#   @return [String, nil]
#
# @!attribute [rw] skill
#   @return [Array, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
RollListMatch = Struct.new(
  :advantage,
  :attribute,
  :class,
  :description,
  :disadvantage,
  :id,
  :item,
  :level,
  :name,
  :property,
  :race,
  :rarity,
  :skill,
  :type,
  keyword_init: true
)

