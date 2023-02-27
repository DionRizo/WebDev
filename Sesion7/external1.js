/*alert("¡Soy una alerta!")

console.log("Hola Mundo");

var x = 'test'

let y = 5

const z = 5 + y

console.log("El valor de Z es: ", z) 

let array = [
  "Hola",
  1,
  3.1416,
  [
    "test",
    false,
    56
  ]

];

let cadena_1 = "Cadena_1"
let cadena_2 = "Cadena_2"

console.log(cadena_1 + "\n" + cadena_2);

let var_cond = (y == 5) ? "Si es 5" : false;*/


//alerta para verificar que funciona.
alert('Buenas :)');


function calcularPromedio(list) {
  let suma = 0;

  for (let i = 0; i < list.length; i++) {
    suma += list[i];
  }

  return suma / list.length;
}


let numeros = [1, 2, 3, 4, 5];
let promedio = calcularPromedio(numeros);

console.log(promedio); 

