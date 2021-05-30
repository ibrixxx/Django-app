from django.db import models

class User(models.Model):
    admin = models.BooleanField(default=False)
    img = models.URLField(default='https://bootdey.com/img/Content/avatar/avatar7.png')
    email = models.EmailField(unique=True, max_length=254, null=False)
    username = models.CharField(unique=True, max_length=50, null=False)
    name = models.CharField(max_length=50)
    password = models.CharField(null=False, max_length=50)
    status = models.CharField(max_length=10, default='Active')
    type = models.CharField(max_length=20, default='Student')
    created_at = models.DateTimeField(auto_now_add=True)

