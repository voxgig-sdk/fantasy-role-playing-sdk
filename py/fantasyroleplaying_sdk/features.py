# FantasyRolePlaying SDK feature factory

from fantasyroleplaying_sdk.feature.base_feature import FantasyRolePlayingBaseFeature
from fantasyroleplaying_sdk.feature.test_feature import FantasyRolePlayingTestFeature


def _make_feature(name):
    features = {
        "base": lambda: FantasyRolePlayingBaseFeature(),
        "test": lambda: FantasyRolePlayingTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
