-- FantasyRolePlaying SDK error

local FantasyRolePlayingError = {}
FantasyRolePlayingError.__index = FantasyRolePlayingError


function FantasyRolePlayingError.new(code, msg, ctx)
  local self = setmetatable({}, FantasyRolePlayingError)
  self.is_sdk_error = true
  self.sdk = "FantasyRolePlaying"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function FantasyRolePlayingError:error()
  return self.msg
end


function FantasyRolePlayingError:__tostring()
  return self.msg
end


return FantasyRolePlayingError
