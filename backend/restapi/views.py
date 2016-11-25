from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .classes import Archivo
from .serializers import ArchivoSerializer
from rest_framework.decorators import api_view
from Tokenizer import Tokenizer
from django.http import JsonResponse


# Create your views here.

# class ArchivoList(APIView):

# 	def post(self):
# 		archivos = Archivo.objects.all()
# 		serializer = ArchivoSerializer(archivos, many=True)
# 		return Response(serializer.data)

x = Tokenizer()
@api_view(['GET', 'POST'])
def rutas(request):
    if request.method == 'POST':
        d = dict(request.data)
        resultados = []
        for fileitem in d['archivos[]']:
            resultados.append(x.evaluar(fileitem))

        return JsonResponse({"archivos": resultados})

    elif request.method == 'GET':
        return Response({"message": "Hello, world!"})
