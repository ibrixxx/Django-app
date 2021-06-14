from django.urls import path
from .views import index

urlpatterns = [
    path('', index, name="index"),
    path('home/<str:username>', index, name="home"),
    path('lectures/<str:username>', index, name="lectures"),
    path('homework/<str:username>', index, name="homework"),
    path('classes/<str:username>', index, name="classes"),
    path('settings/<str:username>', index, name="settings"),
    path('lost_password', index, name="lost_password"),
    path('login', index, name="login"),
    path('register', index, name="register"),
    path('a/home', index, name="admin_home"),
    path('a/lectures', index, name="admin_lectures"),
    path('a/homework', index, name="admin_homework"),
    path('a/classes', index, name="admin_classes"),
    path('a/settings', index, name="admin_settings"),
    path('a/users', index, name="admin_users")
]