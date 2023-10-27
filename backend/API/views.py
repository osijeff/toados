from django.shortcuts import render

# Create your views here.
# api/views.py

from rest_framework import generics
from .models import Todo
from .serializers import TodoSerializer

class TodoListView(generics.ListCreateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

class TodoDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
