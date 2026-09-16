# FantasyRolePlaying SDK feature factory

from fantasyroleplaying_sdk.feature.base_feature import FantasyRolePlayingBaseFeature
from fantasyroleplaying_sdk.feature.ratelimit_feature import FantasyRolePlayingRatelimitFeature
from fantasyroleplaying_sdk.feature.retry_feature import FantasyRolePlayingRetryFeature
from fantasyroleplaying_sdk.feature.test_feature import FantasyRolePlayingTestFeature
from fantasyroleplaying_sdk.feature.timeout_feature import FantasyRolePlayingTimeoutFeature


_FEATURES = {
    "base": lambda: FantasyRolePlayingBaseFeature(),
    "ratelimit": lambda: FantasyRolePlayingRatelimitFeature(),
    "retry": lambda: FantasyRolePlayingRetryFeature(),
    "test": lambda: FantasyRolePlayingTestFeature(),
    "timeout": lambda: FantasyRolePlayingTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
