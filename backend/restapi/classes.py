from datetime import datetime

class Archivo(object):
    def __init__(self, ruta):
        self.ruta = ruta

archivo = Archivo(ruta='archivos/cpp')