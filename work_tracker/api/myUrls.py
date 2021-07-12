from django.urls import path
from .views import add_new_user, ProfileView, check_login, load_classes, load_tasks, load_records, add_record, load_filtered_records, add_task, load_filtered_classes,load_user, change_img, change_password, change_username, change_status, load_all_users, load_filtered_users, load_filtered_users_by_semester

urlpatterns = [
    path('', ProfileView.as_view()),
    path('register/new_user', add_new_user, name="new_user"),
    path('check_login/', check_login, name="mylogin"),
    path('add_record/', add_record, name="myRecord"),
    path('add_task/', add_task, name="myTask"),
    path('change_img/', change_img, name="change_img"),
    path('change_password/', change_password, name="change_password"),
    path('change_username/', change_username, name="change_username"),
    path('change_status/', change_status, name="change_status"),
    path('load_filtered_records/', load_filtered_records, name="load_filtered_records"),
    path('load_filtered_classes/', load_filtered_classes, name="load_filtered_classes"),
    path('load_filtered_users/', load_filtered_users, name="load_filtered_users"),
    path('load_filtered_users_by_semester/', load_filtered_users_by_semester, name="load_filtered_users_by_semester"),
    path('load_tasks/<str:username>', load_tasks, name="load_tasks"),
    path('load_classes/<str:username>', load_classes, name="load_cl"),
    path('load_records/<str:username>', load_records, name="load_records"),
    path('load_user/<str:username>', load_user, name="load_user"),
    path('load_all_users', load_all_users, name="load_all_users"),
]