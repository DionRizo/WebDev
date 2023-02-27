const calificaciones = [
  [6, 8, 5, 5, 10],
  [6, 5, 7, 3, 8],
  [5, 5, 8, 1, 4],
  [6, 9, 8, 10, 5],
  [5, 8, 5, 7, 9]
];

const fnAprobado = (grupo, promedio) => {
  console.log(`El grupo ${grupo} aprobó con un promedio de ${promedio}`);
};

const fnReprobado = (grupo, promedio) => {
  console.log(`El grupo ${grupo} reprobó con un promedio de ${promedio}`);
};

const getPromedio = (notas) => {
  let suma = 0;
  for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
  }
  return suma / notas.length;
};

const getCalificaciones = (calificaciones, fnReprobado, fnAprobado, getPromedio) => {
  for (let i = 0; i < calificaciones.length; i++) {
    let promedio = getPromedio(calificaciones[i]);
    if (promedio >= 6) {
      fnAprobado(i + 1, promedio);
    } else {
      fnReprobado(i + 1, promedio);
    }
  }
  console.log("¡Califiaciones Calculadas!");
};

console.log(calificaciones);

getCalificaciones(calificaciones, fnReprobado, fnAprobado, getPromedio);