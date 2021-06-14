from django.urls import path
from .views import add_new_user, ProfileView, check_login, load_home

urlpatterns = [
    path('', ProfileView.as_view()),
    path('register/new_user', add_new_user, name="new_user"),
    path('check_login/', check_login, name="mylogin"),
    path('load_home/<int:username>', load_home, name="load_home")
]