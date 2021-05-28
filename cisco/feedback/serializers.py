from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Feedback


class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = ['id', 'name', 'feedback', 'created']