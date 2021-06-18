from django.contrib import admin

from .models import User, Records, Task, Classes

admin.site.register(User)
admin.site.register(Records)
admin.site.register(Task)
admin.site.register(Classes)

