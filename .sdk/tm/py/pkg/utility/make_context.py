# FantasyRolePlaying SDK utility: make_context

from projectname_sdk.core.context import FantasyRolePlayingContext


def make_context_util(ctxmap, basectx):
    return FantasyRolePlayingContext(ctxmap, basectx)
