from django.contrib import admin

from .models import User, Records, Homework, Classes

admin.site.register(User)
admin.site.register(Records)
admin.site.register(Homework)
admin.site.register(Classes)

