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
class Roll
end

# Request payload for Roll#load.
class RollLoadMatch
end

# Request payload for Roll#list.
class RollListMatch
end

