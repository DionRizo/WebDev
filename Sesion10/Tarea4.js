

/*----------------------------------Ejercicio numero 1 de la sesion 10-----------------------------------*/ 
let arreglo_vacio = []

for(let i = 0; i <=10;i++) {
  let libro = {
    id: i, 
    autor: "Autor" + Math.floor(Math.random() * 100),
    anio:Math.floor(Math.random() * 20) + 2000,
    fecha: ''
  }
  libro.fecha = new Date(libro.anio + "-01-01T12:00:00.000Z");
  arreglo_vacio.push(libro);
}

console.table(arreglo_vacio);
console.log("Los libros en JSON: ", JSON.stringify(arreglo_vacio));



/*----------------------------------Ejercicio numero 2 de la sesion 10-----------------------------------*/

let libro_new = {
  id: 11,
  autor: "Autor libro nuevo",
  anio: 2023,
  fecha: new Date()
}

arreglo_vacio.unshift(libro_new);
console.log("\n");
console.log("Este es el arreglo original del ejecricio 1 pero ahora le agregamos un libro nuevo al inicio.");
console.log("\n");

console.table(arreglo_vacio);


console.log("\n");
console.log("Este es el arreglo original pero ahora en una lista nueva y con la lista original vacia.");
console.log("\n");

function invertirArreglo(arregloOriginal) {
  // Creamos un arreglo nuevo vacío para almacenar los libros en orden inverso
  let invertido = [];

  // Recorremos el arreglo original en orden inverso y agregamos cada libro al nuevo arreglo
  for (let i = arregloOriginal.length - 1; i >= 0; i--) {
    invertido.push(arregloOriginal[i]);
  }

  // Vaciamos el arreglo original
  arregloOriginal.splice(0, arregloOriginal.length);

  // Devolvemos el nuevo arreglo con los libros en orden inverso
  return invertido;
}



let librosInvertidos = invertirArreglo(arreglo_vacio);
console.table(librosInvertidos); // muestra los libros en orden inverso
console.log("\n");
console.log("Los libros en JSON: ", JSON.stringify(librosInvertidos));
console.log("\n");
console.table("Arreglo Original Vacio: " + arreglo_vacio); // muestra el arreglo original vacío




/*----------------------------------Ejercicio numero 3 de la sesion 10-----------------------------------*/


/*
let librosCopy = libro_new;


function deleteLibro(id, books) {
  let indice = books.findIndex(item => item.id === id);
  if(indice != -1) {
    delete books[indice];
    console.log("Elemento", id, "Eliminado");
    return true;
  }
  else {
    console.log("Elemento", id, "no encontrado");
    return false;
  }
}

deleteLibro(4,librosCopy);
console.table(librosCopy);
function filterByYear(anio, books) {
  return books.filter(item => item.anio <= anio);
}

let libros_filtrados = filterByYear(2013, librosCopy);
console.table(libros_filtrados);
*/

/*---------------------------------------------------------------Tarea 4------------------------------------------------------*/


// Arreglo de libros
let arreglo_final = []

for (let i = 0; i <= 20; i++) {
  let libro = {
    id: i,
    autor: "Autor" + Math.floor(Math.random() * 100),
    anio: Math.floor(Math.random() * 20) + 2000,
    fecha: '',
    clave: Math.floor(Math.random() * 900) + 100,
    palabras: Math.floor(Math.random() * (100000 - 1000 + 1)) + 1000
  }
  libro.fecha = new Date(libro.anio + "-01-01T12:00:00.000Z");
  arreglo_final.push(libro);
}

// Ordenar libros por clave
arreglo_final.sort(function(a, b) {return a.clave - b.clave;});

// Función con case-switch para calcular la suma total, el promedio, el libro con más palabras y el libro con menos palabras
function calcularOpcionLibros(arreglo, opcion) {
  let respuesta;

  switch (opcion) {
    case "TOT":
      respuesta = arreglo.reduce(function(total, libro) { //The reduce() method returns a single value: the function's accumulated result. (w3schools)
        return total + libro.palabras;
      }, 0);
      break;
    case "PRO":
      respuesta = arreglo.reduce(function(total, libro) {
        return total + libro.palabras;
      }, 0) / arreglo.length;
      break;
    case "MAX":
      let libroMaxPalabras = arreglo.reduce(function(prev, curr) {
        return (prev.palabras > curr.palabras) ? prev : curr
      });
      respuesta = `${libroMaxPalabras.clave}-${libroMaxPalabras.palabras}`;
      break;
    case "MIN":
      let libroMinPalabras = arreglo.reduce(function(prev, curr) {
        return (prev.palabras < curr.palabras) ? prev : curr
      });
      respuesta = `${libroMinPalabras.clave}-${libroMinPalabras.palabras}`;
      break;
    default:
      respuesta = "Opción no válida";
  }

  return respuesta;
}


console.log("\n");
console.log("\n");
console.log("Este es el arreglo final del ejercicio de tarea.");
console.table(arreglo_final);
console.log("\n");
console.log("\n");
console.log("Los libros en JSON: ");
console.log( JSON.stringify(arreglo_final));

console.log("\n");

console.log("Todas las salidas del switch case: ");
console.log("\n");

console.log("Suma total de palabras:", calcularOpcionLibros(arreglo_final, "TOT"));
console.log("Promedio de palabras:", calcularOpcionLibros(arreglo_final, "PRO"));
console.log("Libro con más palabras:", calcularOpcionLibros(arreglo_final, "MAX"));
console.log("Libro con menos palabras:", calcularOpcionLibros(arreglo_final, "MIN"));
