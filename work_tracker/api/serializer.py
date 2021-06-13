from django.db import models
from django.db.models import fields
from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'name', 'email', 'password', 'admin', 'img', 'status', 'type')
      

class CreateNewUser(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'name', 'email', 'password', 'type')