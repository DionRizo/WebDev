
/*
console.log("uno");
setTimeout(function timeout() {
  console.log("A");
}, 7000);

setTimeout(function timeout() {
  console.log("B");
}, 0);

setTimeout(function timeout() {
  console.log("C");
}, 2000);

setTimeout(function timeout() {
  console.log("D");
}, 1000);

console.log("end");

*/

/*
setTimeout(function timeout() {
  console.log("Hola");
}, 1000);

setTimeout(function timeout() {
  console.log("Hola");
}, 2000);

setTimeout(function timeout() {
  console.log("Hola");
}, 3000);

setTimeout(function timeout() {
  console.log("Hola");
}, 4000);

setTimeout(function timeout() {
  console.log("Hola");
}, 5000);

setTimeout(function timeout() {
  console.log("Mundo");
}, 1000);

setTimeout(function timeout() {
  console.log("Mundo");
}, 2000);

setTimeout(function timeout() {
  console.log("Mundo");
}, 3000);

setTimeout(function timeout() {
  console.log("Mundo");
}, 4000);


*/


/*
let promesa1 = new Promise(function(resolve, reject) {
  setTimeout(() =>{
    if (Math.random() < 0.5) {
      console.log("Procesando la promesa");
      resolve("Correcto!");
    } else {
      reject(new Error("Algo fallo"));
    }
  },1000);
});

promesa1.then(function exito(result) {
  console.log(result);
}, function rechazo(error) {
    console.log(error);
});

*/

/*
function loadScript(src) {
  return new Promise(function(resolve, reject) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error("Script load error: " + src));
    document.head.append(script);
  });
}

let promesa2 = loadScript("https://www.youtube.com/watch?v=phWxA89Dy94");
promesa2.then(
  script => alert(script.src + "     Cargada!"), 
  error => alert("Error" + error.message)
);
promesa2.then(script => alert("algo extra por hacer!"));

*/

async function loadJson(url) {
  let response = await fetch(url);
  if (response.status == 200) {
    let json = await response.json();
    return json;
  }
  console.log(response.status);
  throw new Error(response.status);
}
loadJson('users.json').catch(alert);