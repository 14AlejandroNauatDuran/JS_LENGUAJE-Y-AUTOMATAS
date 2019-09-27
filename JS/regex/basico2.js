//ocultar la primera consonante
let mensaje = "correcaminos";
let newMensaje = mensaje.replace(/[^aeiou]/, "*");
console.log(newMensaje);

//ocultar todas las consonantes
let mensaje2 = "correcaminos";
let newMensaje2 = mensaje2.replace(/[^aeiou]/g,"*");
console.log(newMensaje2);

//ocultar la ultima consonante
let mensaje3 = "correcaminos";
let newMensaje3 = mensaje3.replace(/[^aeiou]$/g,"*");
console.log(newMensaje3);

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

