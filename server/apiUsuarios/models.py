from django.db import models

# Create your models here.
class Usuario(models.Model):
    nombre_completo = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    contrasena = models.CharField(max_length=100)
    telefono = models.CharField(max_length=15, blank=True, null=True)
    fecha_registro = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.nombre_completo
