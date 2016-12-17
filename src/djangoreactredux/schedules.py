from celery.schedules import crontab
from celery.task import periodic_task

import lib.tasks


@periodic_task(run_every=(crontab(minute='*')))
def periodic_task():
    """
    Periodic task running every minute.

    The .delay() is not needed, but is here to demonstrate an async task running inside a periodic task.
    """
    lib.tasks.some_async_task.delay('This task runs every minute!')
    return True
