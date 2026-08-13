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

# Request payload for Entity#list.
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
# @!attribute [rw] advantages
#   @return [Array, nil]
#
# @!attribute [rw] attributes
#   @return [Hash, nil]
#
# @!attribute [rw] class
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] disadvantages
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] items
#   @return [Array, nil]
#
# @!attribute [rw] level
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] race
#   @return [String, nil]
#
# @!attribute [rw] skills
#   @return [Array, nil]
Roll = Struct.new(
  :advantages,
  :attributes,
  :class,
  :description,
  :disadvantages,
  :id,
  :items,
  :level,
  :name,
  :race,
  :skills,
  keyword_init: true
)

# Request payload for Roll#load.
#
# @!attribute [rw] advantages
#   @return [Array, nil]
#
# @!attribute [rw] attributes
#   @return [Hash, nil]
#
# @!attribute [rw] class
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] disadvantages
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] items
#   @return [Array, nil]
#
# @!attribute [rw] level
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] race
#   @return [String, nil]
#
# @!attribute [rw] skills
#   @return [Array, nil]
RollLoadMatch = Struct.new(
  :advantages,
  :attributes,
  :class,
  :description,
  :disadvantages,
  :id,
  :items,
  :level,
  :name,
  :race,
  :skills,
  keyword_init: true
)

# Request payload for Roll#list.
#
# @!attribute [rw] advantages
#   @return [Array, nil]
#
# @!attribute [rw] attributes
#   @return [Hash, nil]
#
# @!attribute [rw] class
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] disadvantages
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] items
#   @return [Array, nil]
#
# @!attribute [rw] level
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] race
#   @return [String, nil]
#
# @!attribute [rw] skills
#   @return [Array, nil]
RollListMatch = Struct.new(
  :advantages,
  :attributes,
  :class,
  :description,
  :disadvantages,
  :id,
  :items,
  :level,
  :name,
  :race,
  :skills,
  keyword_init: true
)

