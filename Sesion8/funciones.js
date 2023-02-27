function fun_1 (variable1 = 5){
  return variable1 + 3;
}

let v3 = 3

function fun_2 (v1 = 1, v2 = 1) {
  return v1 + v2 + v3;
}

console.log("Función 2:" , fun_2());  


function showMessage(message){
  console.log(message);
}

let var_mensaje = showMessage;

var_mensaje("Hola Mundo");
console.log("Variable que tiene la función",var_mensaje)



function de_chill_function(arr, num){
  if (num >= arr.length) {
    return "No se encontró un elemento en la posición indicada.";
  }
  const [name, number] = arr[num];
  return `${name} ${number}`;
}

let de_chill = de_chill_function;




let list = [
  ["Juan", 4],
  ["Pedro", 3],
  ["Luis", 14],
  ["Andrea", 8]
]

console.log("Salida de la funcion de chill: ",de_chill(list, 4));