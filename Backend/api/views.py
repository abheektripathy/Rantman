from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .serializers import NoteSerializer
from .models import Note


# basically maine seedha s=json response le sakta tha but the restframeowrk module gives ui tto it.
@api_view(['GET'])
def getRoutes(request):

    routes = [
        {
            'Endpoint': '/notes/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of notes'
        },
        {
            'Endpoint': '/notes/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },
        {
            'Endpoint': '/notes/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting note'
        },
    ]


    return Response(routes)

@api_view(['GET'])
def getNotes(request):
    notes = Note.objects.all()
    serializer = NoteSerializer(notes, many = True)
    return Response(serializer.data)

# Create your views here.
@api_view(['POST'])
def createNote(request):
    data = request.data
    if 'body' not in data:
        return Response({'error': 'Missing required field: body'})
    note = Note.objects.create(
        body=data['body']
    )

    serializer = NoteSerializer(note, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def getNote(request, pk):
    notes = Note.objects.get(id = pk)
    serializer = NoteSerializer(notes, many = False)
    return Response(serializer.data)

@api_view(['PUT'])
def updateNote(request, pk):
    data = request.data
    note = Note.objects.get(id=pk)
    serializer = NoteSerializer(instance=note, data=data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data) 

@api_view(['DELETE'])
def deleteNote(request, pk):
    note = Note.objects.get(id=pk)
    note.delete()
    return Response('Note was deleted!')

@api_view(['GET'])
def searchNotes(request):
    query = request.GET.get('query', '')
    notes = Note.objects.filter(body__icontains=query)
    serializer = NoteSerializer(notes, many=True)
    return Response(serializer.data)





    