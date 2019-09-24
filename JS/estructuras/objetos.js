//objetos
const saludar = () =>{
	return "hola";
};

let persona = {
	nombre: "lexo",
	apellido: "Nau",
	edad: 23,
	peso: 73.5,
	hobbies: ["música", "fucho"],
	saludar
};

persona.apellido = "Suares Estrechi";
console.log(persona.nombre +""+ persona.apellido);
console.log(persona.edad);
console.log(persona.hobbies);


//arreglo de objetos
let frutas = [
	{
		nombre: "grosella",
		familia: "saxifragáceas",
		calorias: 29.3
	},

	{
		nombre: "limón",
		familia: "rutáceas",
		calorias: 40.3
	},

	{
		nombre: "Piña",
		familia: "bromeliaceas",
		calorias: 46
	}
];

for(let i = 0; i<frutas.length; i+=1){
	console.log(frutas[i]);
};