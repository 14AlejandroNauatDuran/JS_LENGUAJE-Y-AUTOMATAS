# -*- coding: utf-8 -*-
#python2
import re

documento = "condiciones.py"
#buscamos archivo
try:
    texto = open(documento,'r')
except:
    print "el archivo que intenta abrir no existe"
    quit()
#bandeja archivo vacio
bandtext =""
#for para almacenar linea por linea
for linea in texto:
    bandtext+=linea

#Sentencia de asignación. Ejemplo: suma = 0, factorial = 1, vidas = cont, etc.
sent = re.findall(r"\w+\s*\=\s*\w+",bandtext)
print "resultado sentencias de asignacion: ", sent
print ""

#Operaciones aritméticas básicas. Ejemplo: suma = 2.7 + 3, cont = cont + 1, etc. 
operA = re.findall(r"[a-zA-Z]+\s*\=\s*\w+.?\d*\s*[*|+|/|-]\s*\w+.?\d*",bandtext)
print "Resultado operaciones aritmeticas basicas: ",operA
print ""

#Expresiones booleanas básicas. Ejemplo: edad >= 5, suma != 0, etc.
exp = re.findall(r"\w+.?\d*\s*[<|>|!]{1}\=?\s*\w+.?\d*",bandtext)
print "Resultado expresiones booleanas basicas: ",exp
print ""

#Formulas más complejas del tipo c = a op ( b op d) , c = b * (5*5) , result = num4 * (4 + 5)
form = re.findall(r"\w+\s*\=\s*\w+.?\d*\s*[*|+|/|-]\s*[(]{1}\w+.?\d*\s*[*|+|/|-]\s*\w+.?\d*[)]",bandtext)
print "Resultado formulas complejas: ",form
print ""

#El encabezado de estructura de control. if, while, for, etc.
resultado = re.findall(r"(if|while)\s*(\w+.?\d*\s*[<|>|!|=]{1}\=?\s*\w+.?\d*.*)+\:",bandtext)
res = re.findall(r"(for)\s*([a-zA-Z]+\s*\in\s*[a-zA-Z]+)\:",bandtext)
res3 = re.findall(r"(for)\s*([a-zA-Z]+\s*\in\s*range[(]\w+.?\w+[)])\:",bandtext)
print "Resultado encabezado estructuras de control: ",resultado,res,res3