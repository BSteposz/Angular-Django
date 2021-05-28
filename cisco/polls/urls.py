from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'question', views.question_view),
    url(r'choices', views.choice_view)

]
