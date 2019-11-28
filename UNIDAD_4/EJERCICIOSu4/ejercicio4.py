# -*- coding: utf-8 -*-
#python2
import re

documento = "condiciones.py"
#buscamos archivo
try:
	texto = open(documento, 'r')
except:
	print "No se encontro el archivo"
	quit()
#bandeja archivo vacio
bandtext = ""
#for para almacenar linea por linea
for linea in texto:
	bandtext += linea

#variables  ejemplo: suma, i, cont7, etc.
variable = re.findall(r"\w+s*\=",bandtext)
print "Resultado de las variables: ", variable

#enteros y decimales 2.7, 3.1416, 0.2, etc
numero = re.findall(r"\d+.\d+|\d+",bandtext)
print "Resultado de los numeros: ", numero

#operadores aritmeticos: suma, resta, multiplicación, división
operadores = re.findall(r"[*+/-]",bandtext)
print "Resultado de los operadores aritméticos: ", operadores

#operadores relacionales: mayor, menor, igual, diferente.
opeRela = re.findall(r"\<=|\>=|\==|\<|\>|\!=", bandtext)
print "Resultado de los operadores relacionales: ", opeRela

#palabras reservadas
pala = re.findall(r"(and|del|for|is|raise|assert|if|else|elife|from|lambda|return|break|global|not|try|class|except| or |while|continue|exec|import|yield|def|finally| in |print)", bandtext)
print "Resultado de palabras reservadas: ", pala