// Primer ejercicio

// Solicitar a 3 personas su dinero disponible y en base a eso se les informará el helado mas caro que puedan comprar

// Precios:
//    Helado 1 = $ 0.6
//    Helado 2 = $1
//    Helado 3 = $1.6
//    Helado 4 = $1.7
//    Helado 5 = $1.8
//    Helado 6 = $2.9
//    Helado 7 = $2.9

// Juan quiere saber si tiene vuelto

//  QUITAR LOS COMENTARIOS PARA QUE FUNCIONE ESTA PARTE(HASTA LÍNEA 76)

// let dineroJuan = prompt("cuánto dinero tiene Juan?");
// let dineroPedro = prompt("cuánto dinero tiene Pedro?");
// let dineroLucas = prompt("cuánto dinero tiene Lucas?");

// dineroJuan = parseInt(dineroJuan);

// if (dineroJuan >= 0.6 && dineroJuan < 1) {
//   alert("Juan puede comprar el helado 1");
//   alert("y le sobra" + (dineroJuan - 0.6));
// } else if (dineroJuan >= 1 && dineroJuan < 1) {
//   alert("Juan puede comprar el helado 2");
//   alert("y le sobra" + (dineroJuan - 1));
// } else if (dineroJuan >= 1.6 && dineroJuan < 1.7) {
//   alert("Juan puede comprar el helado 3");
//   alert("y le sobra" + (dineroJuan - 1.6));
// } else if (dineroJuan >= 1.7 && dineroJuan < 1.8) {
//   alert("Juan puede comprar el helado 4");
//   alert("y le sobra" + (dineroJuan - 1.7));
// } else if (dineroJuan >= 1.8 && dineroJuan < 2.9) {
//   alert("Juan puede comprar el helado 5");
//   alert("y le sobra" + (dineroJuan - 1.8));
// } else if (dineroJuan >= 2.9) {
//   alert("Juan puede comprar el helado 6 o el helado 7");
//   alert("y le sobra" + (dineroJuan - 2.9));
// } else {
//   alert("Juan No tiene suficiente dinero");
// }

// if (dineroPedro >= 0.6 && dineroPedro < 1) {
//   alert("Pedro puede comprar el helado 1");
// } else if (dineroPedro >= 1 && dineroPedro < 1.6) {
//   alert("Pedro puede comprar el helado 2");
// } else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
//   alert("Pedro puede comprar el helado 3");
// } else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
//   alert("Pedro puede comprar el helado 4");
// } else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
//   alert("Pedro puede comprar el helado 5");
// } else if (dineroPedro >= 2.9) {
//   alert("Pedro puede comprar el helado 6 o el helado 7");
// } else {
//   alert("Pedro no tiene suficiente dinero");
// }

// if (dineroLucas >= 0.6 && dineroLucas < 1) {
//   alert("Lucas puede comprar el helado 1");
// } else if (dineroLucas >= 1 && dineroLucas < 1.6) {
//   alert("Lucas puede comprar el helado 2");
// } else if (dineroLucas >= 1.6 && dineroLucas < 1.7) {
//   alert("Lucas puede comprar el helado 3");
// } else if (dineroLucas >= 1.7 && dineroLucas < 1.8) {
//   alert("Lucas puede comprar el helado 4");
// } else if (dineroLucas >= 1.8 && dineroLucas < 2.9) {
//   alert("Lucas puede comprar el helado 5");
// } else if (dineroLucas >= 2.9) {
//   alert("Lucas puede comprar el helado 6 o el helado 7");
// } else {
//   alert("Lucas no tiene suficiente dinero");
// }

// Segundo ejercicio
// En una fiesta, los menores de 18 años no pueden entrar
// despues de las 2 am, la primer persona que entre no pagará entrada
// la fiesta termina a las 7 am
//
//

//  QUITAR LOS COMENTARIOS PARA QUE FUNCIONE ESTA PARTE(HASTA LÍNEA 110)

// let free = false
// const validarCliente = (time) =>{
//   let edad = prompt("cuál es tu edad?")
//   if (edad >= 18){
//     if (time >= 2 && time < 7 && free == false){
//       alert(`Podes pasar gratis porque son las ${time} la primer persona después de las 2`)
//       free = true
//     }else {
//       alert("podes pasar pero tenes que pagar la entrada")
//     }
//     }else {
//   alert("menores de edad no pueden pasar")
//   }
// }

// validarCliente(23)
// validarCliente(24)
// validarCliente(0.2)
// validarCliente(0.6)
// validarCliente(1)
// validarCliente(2)
// validarCliente(2.4)
// validarCliente(3)

//  EJERCICIO 3
//  hacer un array de alumnos
// tomarles asistencia durante 30 días : a = ausente; p = presente
// pasados los 30 días tenemos que mostrar los totales de presencias y ausencias
// se puede tener un máximo de 10% de inasistencia por semestre


//  QUITAR LOS COMENTARIOS PARA QUE FUNCIONE ESTA PARTE(HASTA LÍNEA 160)

// let cantidad = prompt("cuántos alumnos son?");
// cantidad = parseInt(cantidad);
// let alumnosTotales = [];

// for (i = 0; i < cantidad; i++) {
//   alumnosTotales[i] = [prompt("nombre del alumno " + (i + 1)), 0];
// }

// const tomarAsistencia = (nombre, p) => {
//   let presencia = prompt(
//     `Ingrese "P" o "p" si ${nombre} estuvo presente en el día, de lo contrario presione cualquier otra tecla `
//   );
//   if (presencia == "p" || presencia == "P") {
//     alumnosTotales[p][1]++;
//   }
// };

// for (i = 0; i < 3; i++) {
//   for (alumno in alumnosTotales) {
//     tomarAsistencia(alumnosTotales[alumno][0], alumno);
//   }
// }

// let resultado = "";

// for (alumno in alumnosTotales) {
//   let resultados = `${alumnosTotales[alumno][0]}:<br>
//   _______________Asistencias: ${alumnosTotales[alumno][1]}<br>
//   _______________Ausencias: ${30 - alumnosTotales[alumno][1]}<br>`;

//   if (30 - alumnosTotales[alumno][1] > 18) {
//     resultados += "Reprobado por inasistencias<br>";
//   } else {
//     resultados += "<br>";
//   }

//   resultado += resultados;
// }

// document.getElementById("resultado").innerHTML = resultado;
// console.log(resultado);


// CREAR UNA CALCULADORA CON 4 FUNCIONES BÁSICAS

const sumar = (num1,num2) =>{
  return parseInt(num1) + parseInt(num2)
}
