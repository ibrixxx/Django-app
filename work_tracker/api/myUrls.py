from django.urls import path
from .views import add_new_user, ProfileView, check_login, load_classes, load_tasks, load_records, add_record, load_filtered_records, add_task

urlpatterns = [
    path('', ProfileView.as_view()),
    path('register/new_user', add_new_user, name="new_user"),
    path('check_login/', check_login, name="mylogin"),
    path('add_record/', add_record, name="myRecord"),
    path('add_task/', add_task, name="myTask"),
    path('load_filtered_records/', load_filtered_records, name="load_filtered_records"),
    path('load_tasks/<str:username>', load_tasks, name="load_tasks"),
    path('load_classes/<str:username>', load_classes, name="load_cl"),
    path('load_records/<str:username>', load_records, name="load_records"),
]