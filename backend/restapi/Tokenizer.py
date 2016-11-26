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

class Tokenizer(object):
    arreglo = []
    tiposF = ['int', 'bool', 'void', 'string', 'char', 'double']
    tiposV = ['int', 'bool', 'string', 'char', 'double']
    commentFlag = False
    contConst = 0
    contComentarioS = 0
    contComentarioM = 0
    contConstTotal = 0
    contFunc = 0
    contFuncTotal = 0
    contVar = 0
    contTotalVar = 0
    contInclude = 0
    contIncludeTotal = 0
    contFN = 0
    initCom = 0
    constantPattern = re.compile("(i|d|c|b|f|s)(Arr|Mat)?([A-Z]+)\;$")
    functionPattern = re.compile("((i|d|c|b|f|s|v)(Arr|Mat)?([A-Z][a-z]*([A-Z][a-z]+)*\(?))|(main\(?\)?)$")
    varPattern = re.compile("(i|d|c|b|f|s)(((Arr|Mat)[A-Z][a-z]+([A-Z][a-z]+)*)|(([A-Z][a-z]+([A-Z][a-z]+)*)))\;?")
    commentSPattern = re.compile("\/\/(.)*")
    commentMPattern = re.compile("\/\*(.)*")
    includePattern = re.compile("<([a-z](.[a-z])+)*>")
    fileNamePattern = re.compile("(?![a-zA-z0-9]_)([A-Z][a-z]+([A-Z][a-z]+)*.cpp)")


    # with open(sys.argv[1]) as tsv:
    #     for line in csv.reader(tsv, dialect="excel-tab"):
    #         print line

    def evaluar(self, archivo, criteria):

        self.arreglo = []
        self.commentFlag = False
        self.contConst = 0
        self.contComentarioS = 0
        self.contComentarioM = 0
        self.contConstTotal = 0
        self.contFunc = 0
        self.contFuncTotal = 0
        self.contVar = 0
        self.contTotalVar = 0
        self.contInclude = 0
        self.contIncludeTotal = 0
        self.contFN = 0
        self.initCom = 0

        # f = open(sys.argv[1])
        # while True:
        #     text = f.readline()
        #     if (text == ''):
        #         break
        #     if text.strip():
        #         arreglo.append(text.split())
        self.file = archivo
        #print(self.file.readline())
        while True:
            text = self.file.readline()
            if text == '':
                break
            if text.strip():
                self.arreglo.append(text.split())

        cont = 0
        for linea in self.arreglo:
            if cont == 0 and self.commentMPattern.match(linea[0]):
                self.initCom = 1

            elif self.commentSPattern.match(linea[0]):
                self.contComentarioS += 1

            elif self.commentMPattern.match(linea[0]):
                self.contComentarioM += 1

            elif linea[0] == "#include":
                if self.includePattern.match(linea[1]):
                    self.contInclude += 1
                    self.contIncludeTotal += 1
                else:
                    self.contIncludeTotal += 1

            elif linea[0] == 'const':
                if linea[1] in self.tiposV:
                    if self.constantPattern.match(linea[2]):
                        self.contConst += 1
                        self.contConstTotal += 1
                    else:
                        self.contConstTotal += 1

            elif any("(" in s for s in linea):
                if linea[0] in self.tiposF:
                    if not any("=" in s for s in linea):
                        if self.functionPattern.match(linea[1]):
                            self.contFuncTotal += 1
                            self.contFunc += 1
                        else:
                            self.contFuncTotal += 1

                if any("=" in s for s in linea):
                    if linea[0] in self.tiposV:
                        if self.varPattern.match(linea[1]):
                            self.contVar += 1
                            self.contTotalVar += 1
                        else:
                            self.contTotalVar += 1

            elif linea[0] in self.tiposV:
                if self.varPattern.match(linea[1]):
                    self.contVar += 1
                    self.contTotalVar += 1
                else:
                    self.contTotalVar += 1

            cont += 1

        if self.fileNamePattern.match(sys.argv[1]):
            self.contFN += 1

        # print 'includesC: ' + str(self.contInclude);
        # print 'includesT: ' + str(self.contIncludeTotal);
        # print 'commentsC: ' + str(self.contComentarioM+self.contComentarioS);
        # print 'commentsT: ' + str(self.contComentarioM+self.contComentarioS);
        # print 'constC: ' + str(self.contConst);
        # print 'constT: ' + str(self.contConstTotal);
        # print 'funcC: ' + str(self.contFunc);
        # print 'funcT: ' + str(self.contFuncTotal);
        # print 'varC: ' + str(self.contVar);
        # print 'varT: ' + str(self.contTotalVar);
        # print 'filename: ' + str(self.contFN);
        # print 'initCom: ' + str(self.initCom);

        if self.contComentarioM+self.contComentarioS >= self.contFuncTotal:
            com = 1
        else:
            com = 0
        calificacion = 0
        if self.contIncludeTotal > 0:
            calificacion = (self.contInclude / self.contIncludeTotal)*int(criteria[0])
        calificacion = calificacion + (com)*int(criteria[1])
        if self.contConstTotal > 0:
            calificacion = calificacion + (self.contConst / self.contConstTotal)*int(criteria[2])
        if self.contFuncTotal > 0:
            calificacion = calificacion + (self.contFunc / self.contFuncTotal)*int(criteria[3])
        if self.contTotalVar > 0:
            calificacion = calificacion + (self.contVar / self.contTotalVar)*int(criteria[4])
        calificacion = calificacion + (self.contFN) * int(criteria[5])
        if self.contIncludeTotal:
            calificacion = calificacion + (self.contInclude / self.contIncludeTotal)*int(criteria[6])
        return {'nombre': str(archivo),
            'includesCorrect': self.contInclude,
            'includesTotal' : self.contIncludeTotal,
            'commentsCorrect' : self.contComentarioM+self.contComentarioS,
            'commentsTotal' : self.contComentarioM+self.contComentarioS,
            'constCorrect' : self.contConst,
            'constTotal' : self.contConstTotal,
            'funcCorrect' : self.contFunc,
            'funcTotal' : self.contFuncTotal,
            'varCorrect' : self.contVar,
            'varTotal' : self.contTotalVar,
            'filename': self.contFN,
            'initComment': self.initCom,
            'calificacion': calificacion
            }


    #print parser(arreglo)
