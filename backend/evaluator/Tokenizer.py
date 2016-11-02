import sys
import csv
import re
import json

# Some Python 3 compatibility shims
if sys.version_info.major < 3:
    STRING_TYPES = (str, unicode)
else:
    STRING_TYPES = str
    xrange = range

arreglo = []
#f = open(sys.argv[1])
f = open('evaluator/Grades.cpp')
while True:
    text = f.readline()
    if (text == ''):
        break
    if text.strip():
        arreglo.append(text.split())

# for linea in arreglo:
#     print linea

# with open(sys.argv[1]) as tsv:
#     for line in csv.reader(tsv, dialect="excel-tab"):
#         print line

tipos = ['int', 'bool', 'void', 'string', 'char', 'double']

contConst = 0
contConstTotal = 0
contFunc = 0
contFuncTotal = 0
contVar = 0
contTotalVar = 0
constantPattern = re.compile("(i|d|c|b|f|s)(Arr|Mat)?([A-Z]+)\;$")
#functionPattern = re.compile("(i|d|c|b|f|s|v)(Arr|Mat)?([A-Z][a-z]*([A-Z][a-z]+)*\(?)$")
functionPattern = re.compile("((i|d|c|b|f|s|v)(Arr|Mat)?([A-Z][a-z]*([A-Z][a-z]+)*\(?))|(main\(?\)?)$")
varPattern = re.compile("(i|d|c|b|f|s)(((Arr|Mat)[A-Z][a-z]+([A-Z][a-z]+)*)|(([A-Z][a-z]+([A-Z][a-z]+)*)))\;")

for linea in arreglo:
    for elemento in linea:
        if elemento == 'const':
            if linea[1] in tipos:
                if constantPattern.match(linea[2]):
                    contConst += 1
                    contConstTotal += 1
                    break
                else:
                    contConstTotal += 1
                    break
        elif elemento.find('(') >= 0:
            if '=' in linea:
                break
            if linea[0] in tipos:
                if functionPattern.match(linea[1]):
                    contFunc += 1
                    contFuncTotal += 1
                    break
                else:
                    contFuncTotal += 1
                    break
        elif elemento in tipos:
            if len(linea) > 2:
                if linea[2].find('(') < 0 and linea[0].find('//') < 0:
                    if varPattern.match(linea[1]):

                        contVar += 1
                        contTotalVar += 1
                    else:
                        #print(linea[1])
                        contTotalVar += 1
            elif varPattern.match(linea[1]):

                contVar += 1
                contTotalVar += 1
            else:
                #print(linea[1])
                contTotalVar += 1


listaTotales = []
listaTotales.append(['Constantes correctas', str(contConst)])
listaTotales.append(['Constantes totales', str(contConstTotal)])
listaTotales.append(['Funciones correctas', str(contFunc)])
listaTotales.append(['Funciones totales', str(contFuncTotal)])
listaTotales.append(['Variables correctas', str(contVar)])
listaTotales.append(['Variables totales', str(contTotalVar)])

# print("constantes correctas" + " " + str(contConst))
# print("constantes totales" + " " + str(contConstTotal))
# print("funciones correctas" + " " + str(contFunc))
# print("funciones totales" + " " + str(contFuncTotal))
# print("variables correctas" + " " + str(contVar))
# print("variables totales" + " " + str(contTotalVar))

def imprimir():
    return ''
