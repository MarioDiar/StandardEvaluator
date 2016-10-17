from rest_framework import serializers

class ArchivoSerializer(serializers.Serializer):
    ruta = serializers.CharField(max_length=200)

    def create(self, validated_data):
        return Archivo(**validated_data)



