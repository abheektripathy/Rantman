from django.db import models

# Create your models here

class Note(models.Model):
    body = models.TextField(null = True,blank = True)
    updated = models.DateTimeField(auto_now = True)
    created = models.DateTimeField(auto_now_add = True)

    def __str__(self):
        return self.body[0:50]

class Syed(models.Model):
    name = models.TextField(null = True,blank = True)
    age = models.IntegerField()
    height = models.IntegerField()

    def __str__(self):
        return self.name

        
