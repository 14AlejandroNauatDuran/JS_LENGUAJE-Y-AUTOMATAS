# -*- coding: utf-8 -*-

a= int(input("ingrese un numero: "))

if a>=1 and a<=100:
    print("a esta en el rango")
else:
    print("a no esta en el rango")

print("El valor de a es :", a)


print ("este programa fue realizado por israel")

elefantes = int(input("cuantos elefates: "))
cant_elefantes = 0

while elefantes > cant_elefantes:
    cant_elefantes = cant_elefantes +1
    if cant_elefantes == 1:
        print("1 elefante se columpiaba sobre la tela de una araña")
    else:
        print(cant_elefantes, "elefante se columpiaba sobre la tela de una araña")

#algo = 5 / 2
vocales = ["a","e","i","o","u"]
for vocal in vocales:
    print(vocal)

n = int(input("ingrese un valor: "))
for i in range(0,n):
    print(i*2)

2
2.5
0.45
22.54
# a != b

# try:
#     archivo = open(doc,'r')
# except:
#     print ("No se pudo encontrar el archivo")
#     quit()