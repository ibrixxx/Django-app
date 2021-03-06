from typing import Callable
from django.db import models
from django.db.migrations.operations.models import ModelOperation
from django.db.models.deletion import CASCADE

class User(models.Model):
    admin = models.BooleanField(default=False)
    img = models.URLField(default='https://bootdey.com/img/Content/avatar/avatar7.png')
    email = models.EmailField(unique=True, max_length=254, null=False)
    username = models.CharField(unique=True, max_length=50, null=False)
    name = models.CharField(max_length=50)
    password = models.CharField(null=False, max_length=50)
    status = models.CharField(max_length=10, default='Active')
    type = models.CharField(max_length=20, default='Assistant')
    created_at = models.DateTimeField(auto_now_add=True)


class Classes(models.Model):
    class_name = models.CharField(max_length=50, unique=True)
    class_durr_in_hours = models.IntegerField(default=2)
    class_day = models.CharField(max_length=20)
    lab_durr_in_hours = models.IntegerField(default=2)
    lab_day = models.CharField(max_length=20)
    class_prof = models.ForeignKey(User, related_name="prof",on_delete=CASCADE)
    class_asist = models.ForeignKey(User, related_name="ass",on_delete=CASCADE)
    year = models.IntegerField(default=1)
    semester = models.CharField(max_length=20)



class Task(models.Model):
    user = models.CharField(max_length=50)
    class_type = models.CharField(max_length=50)
    start = models.DateField(auto_now_add=True)
    end = models.DateField(blank=True)
    accepted = models.CharField(max_length=50, default='waiting')


class Records(models.Model):
    class_name = models.CharField(max_length=50)
    held_date = models.DateField(auto_now_add=True)
    class_type = models.CharField(max_length=50)
    week_held = models.IntegerField()
    start = models.TimeField(blank=True)
    end = models.TimeField(blank=True)
    participants = models.IntegerField(default=1)
    added_by = models.CharField(max_length=50)






