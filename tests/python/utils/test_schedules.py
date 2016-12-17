import mock

from django.test import TestCase, override_settings

from djangoreactredux.schedules import periodic_task
from lib.testutils import mock_some_async_task


class BaseTests(TestCase):
    # Since we are running an async task inside the periodic task
    @override_settings(CELERY_ALWAYS_EAGER=True)
    @mock.patch('lib.tasks.some_async_task.delay', mock_some_async_task)
    def test_periodic_task(self):
        self.assertEqual(periodic_task(), True)
