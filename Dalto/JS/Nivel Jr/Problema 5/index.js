// PARTE 1
// A) Treminó el primer semestre y el alumno no sabe si aprobará o ni las materias, para lograrlo necesitará:
//  - contar con al menos 90% de la asistencia
//  - el promedio por materia debe ser al menos 7/10
//  - debe tener al menos del 75% de trabajos prácticcos entregados

//  - solicitar los datos y decirle si aprueba o no
//  - mostrar todo esto con colores representativos en consola (ej: no aprobar en rojo)
// - Todo esto estructurado como tabla

let materias = {
  fisica: [90, 6, 3, "Física"],
  matematica: [84, 8, 2, "Matemática"],
  logica: [92, 8, 4, "Lógica"],
  quimica: [96, 8, 4, "Química"],
  calculo: [91, 6, 3, "Cálculo"],
  programacion: [79, 7, 4, "Programación"],
  biologia: [75, 9, 2, "Biología"],
  bbdd: [98, 9, 1, "BBDD"],
  algebra: [100, 10, 4, "Álgebra"],
};

const aprobo = () => {
  for (materia in materias) {
    let asistencias = materias[materia][0];
    let promedio = materias[materia][1];
    let trabajos = materias[materia][2];

    console.log(materias[materia][3]);

    if (asistencias >= 90) {
      console.log("%c   Assitencias en orden", "color:green");
    } else {
      console.log("%c   Falta de asistencias", "color:red");
    }
    if (promedio >= 7) {
      console.log("%c   Promedio en orden ", "color:green");
    } else {
      console.log("%c   Promedio desaprobado", "color:red");
    }
    if (trabajos >= 3) {
      console.log("%c   Trabajos prácticos en orden ", "color:green");
    } else {
      console.log("%c  Faltan trabajos prácticos", "color:red");
    }
  }
};

// aprobo();

//    SEGUNDA PARTE
//    Nuestro alumno está sufriendo un poco.. ya que , a pesar de que cree ccontar con el 90% de las
//    asistencias y tener un promedio mayor a 7/10, no cree entregar el 75% de trabajos prácticos entregados, ya que
//    necesita dividir las tareas que hará semanalmente, cofla debe, trabajar 8 horas por día. durante esas 2 semanas entre las cuales
//    tiene que: 24 horas estudiar, 24 horas hacer trabajos practicos, 56 horas de trabajar 8 horas de hacer las cosas de la casa
//      - - Organizar las actividades diariamente
//      - - Utilizar la consola para organizar todo
//      - - El tiempo por tarea no debe superar las 4 horas

// 35 las cosas de la casa
// 100 trabajos
// 10 minutos de descanso
// 100 estudiar
// 240 trabajo

let trabajo = "240 minutos de trabajo";
let estudio = "100 minutos de estudio";
let tp = "100 minutos de hacer trabajos practicos";
let homework = "30 minutos de cosas de la casa";
let descanso = "10 minutos de descanso";

console.log("TAREAS");
for (var i = 0; i < 14; i++) {
  if (i==0){
    console.group(" Semana 1")
  }
  console.groupCollapsed("Día "+ (i+1));
  console.log(trabajo);
  console.log(descanso);
  console.log(estudio);
  console.log(tp);
  console.log(homework);
  console.groupEnd();
  if (i == 7){
    if (i == 0)
      console.groupEnd();
    console.groupCollapsed(" Semana2 ")
  }
}
console.groupEnd();
console.groupEnd();
