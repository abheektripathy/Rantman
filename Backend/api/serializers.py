from rest_framework.serializers import ModelSerializer
from .models import Note
from .models import Syed
class NoteSerializer(ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'

class SyedSerializer(ModelSerializer):

    class Meta:
        model = Syed
        fields = '__all__'