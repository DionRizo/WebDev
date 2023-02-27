/*
let obj1 = new Object();
let obj2 = {};

console.log("Objeto 1: ", obj1, "Objeto 2: ", obj2);

let alumno1 = {
  nombre: "Dorx",
  carrera: "IE",
  apellido_paterno: "Tejeda",
  edad: 27
};

console.log("Alumno 1", alumno1);



function crearAlumno(nombre, carrera, edad) {
  return {
    nombre,
    carrera,
    edad
  }
}


function Alumno (nombre, carrera, edad) {
  this.nombre = nombre;
  this.carrera = carrera;
  this.edad = edad;
}


class AlumnoC {
  constructor(nombre, carrera, edad) {
    this.nombre = nombre;
    this.carrera = carrera;
    this.edad = edad;
  }
}
*/

/*
let celular = {
  Marca: "Apple",
  Modelo: "iPhone 14 Pro Max",
  Año: 2023,
  Precio: 35000,
  Venta: "SI"
};

console.log("Celular: ", celular);

function crearCelular(marca, modelo, año, precio, venta) {
  return {
    marca,
    modelo,
    año,
    precio,
    venta
  }
}

class celular_class {
  constructor(marca, modelo, año, precio, venta) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.precio = precio;
    this.venta = venta;
  }
}

let celularConstructor = new celular_class("Apple", "Iphone", 2019, 10000, "SI" )

*/

let alumno1 = {
  nombre: "Dorx",
  carrera: "IE",
  apellido_paterno: "Tejeda",
  edad: 27
};

if(alumno1.expediente === undefined) {
  console.log("El expediente del alumno no se encuentra");
}

if(!("expediente" in alumno1)) {
  console.log(" El alumno no tiene expediente");
}

for(let key in alumno1) {
  console.log(key, ":", alumno1[key])
}


let alumno3 = alumno1; //Creamos un objeto nuevo pero cuando modifiquemos uno de los dos, los cambios estaran en ambos. 

alumno3.semestre = 6;

console.log(alumno1.semestre);
console.log(alumno3 == alumno1);
console.log(alumno3  === alumno1);
let alumno4 = {};
let alumno5 = {};
console.log(alumno4 == alumno5);
console.log(alumno4 === alumno5);
let alumno6 = {};
Object.assign(alumno6, alumno1); //Creamos un objeto nuevo copiando uno ya creado pero ahora podemos modificar el nuevo sin que se modifique el pasado. 
console.log(alumno6);



















