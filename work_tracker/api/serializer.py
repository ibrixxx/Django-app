from django.db import models
from django.db.models import fields
from rest_framework import serializers
from .models import Classes, User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'name', 'email', 'password', 'admin', 'img', 'status', 'type')
      

class CreateNewUser(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'name', 'email', 'password', 'type')


class GetActivitiesAssistent(serializers.ModelSerializer):
    class Meta:
        model = Classes
        fields = ('class_name', 'class_durr_in_hours', 'class_day', 'class_asist')