from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .classes import Archivo
from .serializers import ArchivoSerializer
from rest_framework.decorators import api_view


# Create your views here.

# class ArchivoList(APIView):

# 	def post(self):
# 		archivos = Archivo.objects.all()
# 		serializer = ArchivoSerializer(archivos, many=True)
# 		return Response(serializer.data)

@api_view(['GET', 'POST'])
def rutas(request):
    if request.method == 'POST':
        return Response({"message": "Got some data!", "data": request.data})

    elif request.method == 'GET':
        archivos = Archivo.objects.all()
        serializer = ArchivoSerializer(archivos, many=True)
        return Response(serializer.data)
        
    return Response({"message": "Hello, world!"})


