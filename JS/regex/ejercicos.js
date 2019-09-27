////////////////////////////////////////////////////////////
console.log("Ejercicio 1. TODAS LAS PALABRAS QUE TENGAN UNA LONGITUD DE 7 O MAS LETRAS.");
////////////////////////////////////////////////////////////

let texto = "los paraguas son funcionales para las tormentas";
let newMensaje = texto.replace(/[a-z]{7,}/g,"");
console.log(newMensaje);

////////////////////////////////////////////////////////////
console.log("Ejercicio 2. EXPRESIONES QUE NO FINALICEN CON UNA VOCAL");
////////////////////////////////////////////////////////////

let newMensaje2 =(/[^aeiou]$/g);
console.log("perro");
console.log(newMensaje2.test("perro"));
console.log("verduras");
console.log(newMensaje2.test("verduras"));

////////////////////////////////////////////////////////////
console.log("Ejercicio 3. las palabras que inicien con M donde la segunda letra no sea vocal");
////////////////////////////////////////////////////////////


let newMensaje3 =/(M|m)[^aeiou+][a-z](\w{0,})/;
console.log("manzana");
console.log(newMensaje2.test("manzana"));
console.log("McDonald´s");
console.log(newMensaje2.test("McDonald´s"));


////////////////////////////////////////////////////////////
console.log( "Ejercicio 4. expresiones encerradas entre comillas"); 
////////////////////////////////////////////////////////////
var historia = "\ la caperucita 'roja' fue a casa \
de la 'abuela' en donde le llevo 'panes' y 'chocolate' caliente";

var expresion = /"([^"]*)"|'([^']*)'/g;
result = historia.match(expresion);
console.log(result);

////////////////////////////////////////////////////////////
console.log("Ejercicio 5. ip´s");
////////////////////////////////////////////////////////////
var texto4 = "las direcciones 192.168.1.2 y 10.0.0.1";

var newMensaje4 = /([0-9](\d{1,3})[.](\d{1,3})[.](\d{1,3})[.](\d{1,3}))/g;
ip = texto4.match(newMensaje4);
console.log(ip);
////////////////////////////////////////////////////////////
console.log("Ejercicio 6. horas");
////////////////////////////////////////////////////////////
var texto5 = " \ 27 de septiembre con horario de 12:23 am y ayer 26 de septiembre \
con hora de 5:00pm";

var newMensaje5 = /([0-9](\d{1,2})[:](\d{1,2})( |)(pm|am))/g;
hora = texto5.match(newMensaje5);
console.log(hora);

////////////////////////////////////////////////////////////
console.log("Ejercicio 7. telefonos");
////////////////////////////////////////////////////////////

var texto6 = " \ el numero de Marco es: 9851873232 \
               el numero de Pablo es: 987 234 2323 ";

var newMensaje6 = /([0-9]((\d{1,3})( |)(\d{1,3})( |)(\d{1,4})))/g;
numero = texto6.match(newMensaje6);
console.log(numero);
////////////////////////////////////////////////////////////
console.log("Ejercicio 8. correos electronicos ");
////////////////////////////////////////////////////////////
let entradaCorreo = /(\W{0,}|\w{0,})(@)(gmail|outlook|hotmail)(.com|.es|.mx)/;
console.log(entradaCorreo.test("Mi correo es: L3x0_20dcjh@outlook.mx"));

////////////////////////////////////////////////////////////
console.log( "Ejercicio 9. url´s");
////////////////////////////////////////////////////////////
let entradaURL = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
console.log(entradaURL.test("http://blog.algunlugar.com/libros/donquijote.html"));
////////////////////////////////////////////////////////////
console.log( " Ejercicio 10. codigo postal");
////////////////////////////////////////////////////////////
let entradaCP = /[0-9]{5,}/;
console.log(entradaCP.test("El codigo postal de Panabá es el 97610"));