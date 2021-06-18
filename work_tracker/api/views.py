from django.http.response import HttpResponse
from django.shortcuts import render
from rest_framework import generics, status
from .serializer import CreateNewUser, UserSerializer
from .models import User, Classes, Task, Records
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.views import Response
from django.core import serializers
 
class ProfileView(generics.CreateAPIView):
    queryset = User.objects.all
    serializer_class = UserSerializer


@api_view(["POST"])
def add_new_user(request):
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


@api_view(["POST"])
def check_login(request):
    if not request.session.exists(request.session.session_key):
        request.session.create()
    username = request.data.get("username")
    password = request.data.get("password")
    queryset = User.objects.filter(username = username)
    if queryset.exists() and queryset[0].password == password:
        if queryset[0].admin:
            return Response(True, status=status.HTTP_202_ACCEPTED)
        return Response(False, status=status.HTTP_202_ACCEPTED)
    return Response(status=status.HTTP_404_NOT_FOUND)


@api_view(["POST"])
def add_record(request):
    username = request.data.get('username')
    class_id = request.data.get('class_id')
    week = request.data.get('week')
    type = request.data.get('type')
    start = request.data.get('start') 
    end = request.data.get('end')
    participants = request.data.get('participants')
    newRecord = Records(added_by = username, class_name = class_id, week_held = week, class_type = type, start = start, end = end, participants = participants)
    newRecord.save()
    return Response(True, status = status.HTTP_202_ACCEPTED)


@api_view(["GET"])
def load_classes(request, username):
    user = User.objects.filter(username = username)
    classes = None
    if user.exists:
        if user[0].type == "Professor":
            classes = Classes.objects.filter(class_prof = user[0])
        else:
            classes = Classes.objects.filter(class_asist = user[0])
    else:
        return Response(status=status.status.HTTP_404_NOT_FOUND)
    data = serializers.serialize('json', classes)
    return HttpResponse(data,status=status.HTTP_202_ACCEPTED)


@api_view(["GET"])
def load_tasks(request, username):
    user = User.objects.filter(username = username)
    if user.exists:
        homework = Task.objects.filter(user = username)
    else:
        return Response(status=status.status.HTTP_404_NOT_FOUND)
    
    data = serializers.serialize('json', homework)
    return HttpResponse(data,status=status.HTTP_202_ACCEPTED)



@api_view(["GET"])
def load_records(request, username):
    records = Records.objects.filter(added_by = username)
    if records.exists:
        data = serializers.serialize('json', records)
        return HttpResponse(data, status=status.HTTP_200_OK)
    return Response(status=status.HTTP_404_NOT_FOUND)

@api_view(["POST"])
def load_filtered_records(request):
    username = request.data.get('username') 
    class_name = request.data.get('class_name')
    type = request.data.get('type')
    week = request.data.get('week')
    records = Records.objects.filter(added_by = username).filter(class_name = class_name).filter(class_type = type).filter(week_held = week)
    if records.exists:
        data = serializers.serialize('json', records)
        return HttpResponse(data, status=status.HTTP_200_OK)
    return Response(status=status.HTTP_404_NOT_FOUND)



@api_view(["POST"])
def add_task(request):
    username = request.data.get('username') 
    date = request.data.get('date')
    type = request.data.get('type')
    newTask = Task(user = username, class_type = type, end = date)
    newTask.save()
    return Response(status = status.HTTP_202_ACCEPTED)