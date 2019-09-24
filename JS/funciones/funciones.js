//Definicion tradicional
function square(x){
	return x*x;
};

//Definicion a traves de una variable
const power = function(base, exponente){
	let result = 1;
	for (let count = 0; count < exponente; count++){
		result*=base;
	};
	return result;
};

//funcion arrow
const hipotenusa = (a, b) => {
	let result = Math.sqrt(a*a + b*b);
	return result;
};

//funcion arrow
const hola =()=>{
	return "Hola";
};

console.log(square(8));
console.log(power(2, 4));
console.log(hipotenusa(3, 4));
console.log(hola());