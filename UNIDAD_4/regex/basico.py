#-*- coding: utf-8 -*-
import re #libreria regex

path = "nombre de archivo.estension"

try:
	archivo = open(path, "r")
except:
	print " el archivo que intentas abrir no existe"
	quit()

texto = ""

for linea in archivo:
	texto += linea
	
print texto