# ProjectName SDK exists test

import pytest
from fantasyroleplaying_sdk import FantasyRolePlayingSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = FantasyRolePlayingSDK.test(None, None)
        assert testsdk is not None
