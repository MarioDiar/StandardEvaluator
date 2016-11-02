import sys
import csv
import re
import json


class Tokenizer(object):
    arreglo = []
    file = ""
    tipos = ['int', 'bool', 'void', 'string', 'char', 'double']
    contConst = 0
    contConstTotal = 0
    contFunc = 0
    contFuncTotal = 0
    contVar = 0
    contTotalVar = 0
    constantPattern = ""
    functionPattern = ""
    varPattern = ""
    
    def __init__(self):
        self.arreglo = []
        self.file = ""
        self.tipos = ['int', 'bool', 'void', 'string', 'char', 'double']
        self.contConst = 0
        self.contConstTotal = 0
        self.contFunc = 0
        self.contFuncTotal = 0
        self.contVar = 0
        self.contTotalVar = 0
        self.constantPattern = re.compile("(i|d|c|b|f|s)(Arr|Mat)?([A-Z]+)\;$")
        self.functionPattern = re.compile("((i|d|c|b|f|s|v)(Arr|Mat)?([A-Z][a-z]*([A-Z][a-z]+)*\(?))|(main\(?\)?)$")
        self.varPattern = re.compile("(i|d|c|b|f|s)(((Arr|Mat)[A-Z][a-z]+([A-Z][a-z]+)*)|(([A-Z][a-z]+([A-Z][a-z]+)*)))\;")

    def evaluar(self, archivo):
        self.file = archivo
        #print(self.file.readline())
        while True:
            text = self.file.readline()
            if text == '':
                break
            if text.strip():
                self.arreglo.append(text.split())

        for linea in self.arreglo:
            for elemento in linea:
                if elemento == 'const':
                    if linea[1] in self.tipos:
                        if self.constantPattern.match(linea[2]):
                            self.contConst += 1
                            self.contConstTotal += 1
                            break
                        else:
                            self.contConstTotal += 1
                            break
                elif elemento.find('(') >= 0:
                    if '=' in linea:
                        break
                    if linea[0] in self.tipos:
                        if self.functionPattern.match(linea[1]):
                            self.contFunc += 1
                            self.contFuncTotal += 1
                            break
                        else:
                            self.contFuncTotal += 1
                            break
                elif elemento in self.tipos:
                    if len(linea) > 2:
                        if linea[2].find('(') < 0 and linea[0].find('//') < 0:
                            if self.varPattern.match(linea[1]):

                                self.contVar += 1
                                self.contTotalVar += 1
                            else:
                                #print(linea[1])
                                self.contTotalVar += 1
                    elif self.varPattern.match(linea[1]):

                        self.contVar += 1
                        self.contTotalVar += 1
                    else:
                        #print(linea[1])
                        self.contTotalVar += 1


        listaTotales = []
        listaTotales.append(['Constantes correctas', str(self.contConst)])
        listaTotales.append(['Constantes totales', str(self.contConstTotal)])
        listaTotales.append(['Funciones correctas', str(self.contFunc)])
        listaTotales.append(['Funciones totales', str(self.contFuncTotal)])
        listaTotales.append(['Variables correctas', str(self.contVar)])
        listaTotales.append(['Variables totales', str(self.contTotalVar)])

        print("constantes correctas" + " " + str(self.contConst))
        print("constantes totales" + " " + str(self.contConstTotal))
        print("funciones correctas" + " " + str(self.contFunc))
        print("funciones totales" + " " + str(self.contFuncTotal))
        print("variables correctas" + " " + str(self.contVar))
        print("variables totales" + " " + str(self.contTotalVar))

