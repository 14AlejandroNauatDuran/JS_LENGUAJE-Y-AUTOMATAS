//EXPRESIONES REGULARES 
//SE PUEDEN DEFINIR DE LAS 2 SIGUIENTES MANERAS

let re1 = new RegExp("abc");
let re2 = /[0-9]/;

result = re1.test("abc"); //true
console.log(result);
result = re2.test("aniversario en 1985");
console.log(result); //true

let re3 = /\d+[-|/]\d+[-|/]\d+/;
console.log(re3.test("13/09/1991"));
console.log(re3.test("18-06-1999"));

let re4 = /\d\d[-|/]\d\d[-|/]\d\d\d\d/;
let re5 = /(\d{1,2}) [-|/] (\d{1,2}) [-|/] (\d{4})/;

var re6 = /[aeiou]/;
console.log(re6.test("Start"));//TRUE

//var trabalenguas = "Sie l caracol tuviera cera como tiene el cara como tinene el caracol, fuera cara, fuera col. fuera caracol con cara
//console.log(/caracol/.exex(trabalenguas));