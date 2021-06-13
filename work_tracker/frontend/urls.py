from django.urls import path
from .views import index

urlpatterns = [
    path('', index, name="index"),
    path('home', index, name="home"),
    path('lectures', index, name="lectures"),
    path('homework', index, name="homework"),
    path('classes', index, name="classes"),
    path('settings', index, name="settings"),
    path('users', index, name="users"),
    path('lost_password', index, name="lost_password"),
    path('login', index, name="login"),
    path('register', index, name="register")
]