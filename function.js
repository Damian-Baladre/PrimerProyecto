/*  

Concatenar cadenas de un array: Crea un array de cadenas de texto y utiliza for...of para concatenarlas en una sola cadena separada por espacios.

Contar propiedades de un objeto: Usa for...in para contar cuántas propiedades tiene un objeto que representa las configuraciones de una aplicación.

Recorrer un array bidimensional: Tienes un array de arrays (matriz) de números. Utiliza bucles for...of anidados para imprimir todos los elementos de la matriz.

Diferenciar métodos y propiedades en un objeto: Dado un objeto que contiene propiedades y métodos, utiliza for...in para iterar sobre él e imprimir solo las propiedades (excluyendo los métodos).

*/

//Recorrer un objeto con for in: Dado un objeto que contiene información de un estudiante (nombre, edad, cursos), utiliza for...in para imprimir cada clave y su valor.
//let estudiante = {
//    "nombre":"Pedro Pascal",
//    "edad": 45,
//    "cursos": ["Impro ", "Mascaras ", "Metodo Chwvolsky "]
//}
//
//for(clave in estudiante){
//    console.log (`${clave} : ${estudiante[clave]}`);
//}

//Sumar elementos de un array con for...of: Crea un array de números y usa for...of para calcular la suma total de sus elementos.
//let numeros = [1, 2, 3, 4,]
//
//let sumaTotal = 0;

//for(numero of numeros){
//    sumaTotal += numero;
//}

//console.log(`la suma total es: ${sumaTotal}`)

//Modificar propiedades de un objeto: Utiliza for...in para incrementar en un 10% todos los valores numéricos de un objeto que representa precios de productos.
//let precios = {
//    "pan": 100,
//    "cereales": 500,
//    "fideos": 300,
//    "leche": 200
//}
//
//for(precio in precios){
//    if(typeof precios[precio] === "number"){
//        precios[precio] = precios[precio] * 1.1;
//    }
//}
//
//console.log(precios)

//Imprimir atributos específicos de objetos en un array: Tienes un array de objetos que representan libros (título, autor, año). Usa for...of para imprimir solo los títulos de los libros.
//

//let libros = [
//    {
//        titulo: "El senior de los anillos",
//        autor : "JRR tolkien",
//        año : 1954
//    },
//    {
//        titulo : "Cell",
//        autor : "Stephen King",
//        año : 2006
//    },
//    {
//        titulo : "El temor de un hombre sabio",
//        autor : "Patrick Rothfuss",
//        año : 2007
//    },
//    {
//        titulo : "Harry Potter y la Piedra filosofal",
//        autor : "J.K. Rowling",
//        año : 1997
//    },
//    {
//        titulo : "La Brujula Dorada",
//        autor : "Phillip Pullman",
//        año : 1995,
//    }
//];
//
//for(libro of libros){
//    console.log(libro.titulo);
//}

//Listar propiedades de un objeto anidado: Dado un objeto que contiene información de una empresa con departamentos y empleados, usa for in para listar todas las propiedades y subpropiedades.

//let empresa = {
//        Calcogafica: {
//            empleados: "muchos",
//            ordenesDeFabricacion: 5
//        },
//        Offset: {
//            empleados: "algunos",
//            ordenesDeFabricacion: 5
//        }
//}   //

//for(propiedades in empresa){
//    console.log("------------" + propiedades + "------------");
//    for(item in empresa[propiedades]){
//        console.log(item, empresa[propiedades][item]);
//    }
//}

//Contar propiedades de un objeto: Usa for...in para contar cuántas propiedades tiene un objeto que representa las configuraciones de una aplicación.

//let configuraciones = [
//    {idioma: "español"},
//    {tema: "oscuro"},
//    {sistemaOperativo: "IOS"},
//    {pantalla: 12}
//    ]
//
//   for (let i = 0; i < 4; i++){
//
//    console.log(configuraciones[i]);
//
//    for(let j = 0; j < 2; j++){
//
//        console.log("en la posicion " + i + " se encuentra la propiedad " + configuraciones[i][j]);
//    }
//   }

//Transformar valores de un array: Usa for...of para iterar sobre un array de números y crear un nuevo array donde cada número esté multiplicado por 2.

//const number = [1, 2, 3, 4, 5, 6];

//let newNumber =[];
//
//for(num of number){
//    newNumber.push(num * 2);
//}
//
//console.log(newNumber);

//for(let i = 0; i < number.length; i++){
//    newNumber[i] = number[i] * 2;
//}

//console.log(newNumber);

// DO - WHILE

//let usuarios = [
//    {id: "juan", contra: "perrito"},
//    {id: "maria", contra: "gatito"},
//    {id: "jose", contra: "maritimo"},
//]
//
//let idContra = null;
//
//do{
//    let id = prompt("Ingrese el ID del usuario")
//
//    for(let i = 0; i < usuarios.length; i++){
//        if(ID == usuarios[i]['id']){
//            idContra = id;
//        }
//    }
//}while(idContra == null);
//
//let contra;
//
//do{
//    let contra = prompt("Contrasenia: ")
//
//} while (contra != usuarios[i]['contra'])

//FUNCIONES
function suma(numbers) {
  let result = 0;
  for (number of numbers) {
    result += number;
  }
  return result;
}

function resta(numbers) {
  let result = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    result -= numbers[i];
  }
  return result;
}

function division(numbers) {
  let result = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    result /= numbers[i];
  }

  if (response == "Infinity") {
    console.log("No se puede dividir por cero.");
  }

  return result;
}

function multiplicacion(numbers) {
  let result = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    result *= numbers[i];
  }
  return result;
}

let correct = false;
let response;

do {
  response = prompt(
    "Que tipo de cuenta queres hacer? (SUMA-RESTA-DIVISION-MULTIPLICACION"
  );

  switch (response.toUpperCase()) {
    case "SUMA":
      correct = true;
      break;
    case "RESTA":
      correct = true;
      break;
    case "DIVISION":
      correct = true;
      break;
    case "MULTIPLICACION":
      correct = true;
      break;
    default:
      alert("tenes que usar una de las cuatro opciones");
  }
} while (!correct);

let numbers = [];
let num;

do {
  num = prompt(
    "Inicie el valor para la " + response + ": (escriba 'x' para finalizar)"
  );

  if (num != "x" && num != "X") {
    num = parseFloat(num);
    numbers.push(num);
  }
} while (num != "x" && num != "F");

let resultadoFinal;

switch (response.toUpperCase()) {
  case "SUMA":
    resultadoFinal = suma(numbers);
    break;
  case "RESTA":
    resultadoFinal = resta(numbers);
    break;
  case "MULTIPLICACION":
    resultadoFinal = multiplicacion(numbers);
    break;
  case "DIVISION":
    resultadoFinal = division(numbers);
    break;
}

console.log("El resultado de la " + response + " es:" + resultadoFinal);
