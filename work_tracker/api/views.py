from django.shortcuts import render
from rest_framework import generics, serializers
from .serializer import UserSerializer
from .models import User
 
class ProfileView(generics.CreateAPIView):
    queryset = User.objects.all
    serializer_class = UserSerializer
