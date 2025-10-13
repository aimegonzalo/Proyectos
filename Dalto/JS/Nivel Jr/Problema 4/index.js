// Parte 1, a nuestra calculadora agregarle las funciones de potenciar, raiz ccuadrada y cúbica
// editarla para que sea una clase y no una funcipon flecha

// class Calculadora {
//   constructor(){}

//   sumar(num1, num2) {
//     return parseInt(num1) + parseInt(num2);
//   }
//   restar(num1, num2) {
//     return parseInt(num1) - parseInt(num2);
//   }
//   multiplicar(num1, num2) {
//     return parseInt(num1) * parseInt(num2);
//   }
//   dividir(num1, num2) {
//     return parseInt(num1) / parseInt(num2);
//   }
//   potenciar(nu,exp){
//     return num**exp
//   }
//   raizCuadrada(num1) {
//     return Math.sqrt(num)
//   }
//   raizCuadrada(num1) {
//     return Math.cbrt(num)
//   }
// }
// const calculadora = new calculadora();
// let op = prompt(
//   "elija una operación: 1: suma, 2: resta, 3, multiplicación, 4: división, 5: potenciación"
// );
// let numero1 = prompt("Ingrese primer número/dividendo/Numero a potenciar u obtener raiz");
// let numero2 = prompt("Ingrese segundo número/Divisor/no necesario en raiz");

// if (op == 1) {
//   let result = calculadora.sumar(numero1, numero2);
//   alert(`el resultado es: ${result}`);
// } else if (op == 2) {
//   let result = calculadora.restar(numero1, numero2);
//   alert(`el resultado es: ${result}`);
// } else if (op == 3) {
//   let result = calculadora.multiplicar(numero1, numero2);
//   alert(`el resultado es: ${result}`);
// } else if (op == 4) {
//   let result = calculadora.dividir(numero1, numero2);
//   alert(`el resultado es: ${result}`);
// } else if(op == 5) {
//   let result = calculadora.potenciar(numero1,numero2)
//   alert(`el resultado es: ${result}`);
// }else if(op == 6) {
//   let result = calculadora.raizCuadrada(numero1)
// alert(`el resultado es: ${result}`);
// }
// else if(op == 7) {
//   let result = calculadora.raizCubica(numero1)
//   alert(`el resultado es: ${result}`);
// }

// preguntar al alumno en que materia se quiere inscribir
// si hay 20 inscriptos negarle la inscripción
// si hay menos de 20, inscribirlo y añadirlo a la lista de alumnos

const materias = {
  fisica: ["Perez", "pedro", "pepito", "cofla", "maria"],
  programacion: ["Rodriguez", "pedro", "pepito", "juan"],
  logica: ["Hernandez", "pedro", "juan", "pepito", "cofla", "maria"],
  quimica: ["Dalto", "pedro", "juan", "pepito", "cofla", "maria"],
};

const obtenerInformacion = (materia) => {
  if (materias[materia] !== undefined) {
    return [materias[materia], materia, materias];
  } else {
    return false;
  }
};

const mostrarInformacion = (materia) => {
  const informacion = obtenerInformacion(materia);

  if (informacion !== false) {
    const profesor = informacion[0][0];
    const alumnos = informacion[0].slice(1);

    const resultado = document.getElementById("resultado");

    resultado.innerHTML += `
      El profesor de <b>${informacion[1]}</b> es:
      <b style="color:red">${profesor}</b><br>
      Los alumnos son:
      <b style="color:blue">${alumnos.join(", ")}</b><br><br>
    `;
  } else {
    console.log("La materia no existe");
  }
};

const inscribirAlumno = (alumno, materia) => {
  const info = obtenerInformacion(materia);

  if (info !== false) {
    let alumnos = info[0];


    if (alumnos.length >= 21) {

      alert(`Lo siento ${alumno}, la clase de ${materia} ya está llena.`);
    } else {
      alumnos.push(alumno);
      alert(`${alumno} se inscribió correctamente en ${materia}.`);
      mostrarInformacion(materia);
    }
  } else {
    alert("La materia que elegiste no existe.");
  }
};


mostrarInformacion("fisica");
mostrarInformacion("quimica");
mostrarInformacion("programacion");
mostrarInformacion("logica");

inscribirAlumno("Gonzalo", "fisica");
