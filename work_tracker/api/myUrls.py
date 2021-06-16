from django.urls import path
from .views import add_new_user, ProfileView, check_login, load_classes, load_home

urlpatterns = [
    path('', ProfileView.as_view()),
    path('register/new_user', add_new_user, name="new_user"),
    path('check_login/', check_login, name="mylogin"),
    path('load_home/<str:username>', load_home, name="load_home"),
    path('load_classes/<str:username>', load_classes, name="load_cl")
]