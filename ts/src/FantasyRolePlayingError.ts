
import { Context } from './Context'


class FantasyRolePlayingError extends Error {

  isFantasyRolePlayingError = true

  sdk = 'FantasyRolePlaying'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  FantasyRolePlayingError
}

