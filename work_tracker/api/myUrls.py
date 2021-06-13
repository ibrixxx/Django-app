from django.urls import path
from .views import add_new_user, ProfileView

urlpatterns = [
    path('', ProfileView.as_view()),
    path('register/new_user', add_new_user, name="new_user"),
]