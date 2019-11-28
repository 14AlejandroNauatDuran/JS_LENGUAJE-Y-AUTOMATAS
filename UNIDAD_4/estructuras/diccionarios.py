#-*- coding: utf-8 -*-

#alumnos = {
#	"F007" : "omar alexis",
#	"ES0394D" : "angel pool"
#	}
#alu = ["SSS232E"] = "Pomol israel"
dias = { "enero":31,
		 "febrero":28,
		 "marzo": 30
		}

mes = raw_input("escribe el mes:  ")
print "El mes tiene: ", dias[mes], "dias"

for key in dias:
	print key, "\t", dias[key]