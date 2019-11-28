# -*- coding: utf-8 -*-
import re
doc = "condiciones.py"

try:
    archivo = open(doc,'r')
except:
    print ("No se pudo encontrar el archivo")
    quit()

texto =""

for linea in archivo:
    texto+=linea


# 	Variables válidas. Ejemplo: suma, i, cont7, etc. 
patron = r"\w+\s*\="
resultado = re.findall(patron,texto)
print("Resultado de la busqueda de variables: ",resultado)

# 	Enteros y decimales. 2.7, 3.1416, 0.2, etc.
patron =r"\d+.\d+|\d+"
resultado = re.findall(patron,texto)
print("Resultado de la busqueda de numeros enteros y decimales es: ",resultado)

# 	Operadores aritméticos (suma, resta, multiplicación, división, etc.)
patron = r"[*+/-]"
resultado = re.findall(patron,texto)
print("Resultado de operadores aritmeticos: ",resultado)

# 	Operadores relacionales. (mayor, menor, igual, diferente, etc.)
patron = r"\<=|\>=|\==|\<|\>|\!="
resultado =re.findall(patron,texto)
print("Resultado de operadores relacionales: ",resultado)

# 	Palabras reservadas.
patron = r"(and|del|for|is|raise|assert|if|else|elife|from|lambda|return|break|global|not|try|class|except| or |while|continue|exec|import|yield|def|finally| in |print)"
resultado =re.findall(patron,texto)
print("Resultado de palabras reservadas: ",resultado)