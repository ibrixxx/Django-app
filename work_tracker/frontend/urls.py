from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('home', index),
    path('lectures', index),
    path('homework', index),
    path('classes', index),
    path('settings', index),
    path('users', index),
    path('lost_password', index),
    path('login', index),
    path('register', index)
]