from django.http import JsonResponse
from rest_framework import viewsets, status
from rest_framework import permissions
from rest_framework.parsers import JSONParser

from .serializers import ImageSerializer
from .models import Image
from rest_framework.decorators import api_view


@api_view(['GET', 'POST'])
def ImageViewSet(request):
    if request.method == 'GET':
        image = Image.objects.all()
        serializer = ImageSerializer(image, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        image = JSONParser().parse(request)
        serializer = ImageSerializer(data=image)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


