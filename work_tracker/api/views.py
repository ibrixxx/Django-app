from django.shortcuts import render
from rest_framework import generics, status
from .serializer import CreateNewUser, UserSerializer
from .models import User
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.views import Response
 
class ProfileView(generics.CreateAPIView):
    queryset = User.objects.all
    serializer_class = UserSerializer


@api_view(["POST"])
def add_new_user(request):
    if not request.session.exists(request.session.session_key):
        request.session.create()

    username = request.data.get("username")
    name = request.data.get("name")
    email = request.data.get("email")
    password = request.data.get("password")
    admin = False
    img = "https://bootdey.com/img/Content/avatar/avatar7.png"
    statuss = "Active"
    type = request.data.get("type")
    queryset = User.objects.filter(email = email)
    if queryset.exists():
        return Response(status=status.HTTP_406_NOT_ACCEPTABLE)
    queryset2 = User.objects.filter(username = username)
    if queryset2.exists():
        return Response(status=status.HTTP_406_NOT_ACCEPTABLE)
    newUser = User(username = username, name = name, email = email, password = password, admin = admin, img = img, status = statuss, type = type)
    newUser.save()

    return Response(status=status.HTTP_201_CREATED)