from django.http import JsonResponse
from django.shortcuts import render

# Create your views here.
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser

from .models import Question, Choice
from .serializers import QuestionSerializer, ChoiceSerializer


@api_view(['GET'])
def question_view(request):
    if request.method == 'GET':
        question = Question.objects.all()
        serializer = QuestionSerializer(question, many=True)
        return JsonResponse(serializer.data, safe=False)


@api_view(['GET','PUT'])
def choice_view(request):
    if request.method == 'GET':
        choice = Choice.objects.all()
        serializer = ChoiceSerializer(choice, many=True)

        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'PUT':
        choice = Choice.objects.all().values()
        data = JSONParser().parse(request)
        serializer = ChoiceSerializer(data, many=True, data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, safe=False)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

