from django.http import JsonResponse
from rest_framework import viewsets, status
from rest_framework import permissions
from rest_framework.parsers import JSONParser

from .serializers import FeedbackSerializer
from .models import Feedback
from rest_framework.decorators import api_view


@api_view(['GET', 'POST'])
def feedback_view_set(request):
    if request.method == 'GET':
        image = Feedback.objects.all()
        serializer = FeedbackSerializer(image, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        feedback = JSONParser().parse(request)
        serializer = FeedbackSerializer(data=feedback)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

