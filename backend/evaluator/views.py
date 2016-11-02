from django.shortcuts import render
from django.http import HttpResponse
from Tokenizer import imprimir

def index(request):
	
	#response = HttpResponse(imprimir, context_type="text/plain")
	response_a = imprimir()
	return HttpResponse(response_a)
    #return HttpResponse("Hello, world. You're at the evaluator index.")
