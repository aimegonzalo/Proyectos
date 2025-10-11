// Parte 1, a nuestra calculadora agregarle las funciones de potenciar, raiz ccuadrada y cúbica
// editarla para que sea una clase y no una funcipon flecha

class Calculadora {
  constructor(){}

  sumar(num1, num2) {
    return parseInt(num1) + parseInt(num2);
  }
  restar(num1, num2) {
    return parseInt(num1) - parseInt(num2);
  }
  multiplicar(num1, num2) {
    return parseInt(num1) * parseInt(num2);
  }
  dividir(num1, num2) {
    return parseInt(num1) / parseInt(num2);
  }
  potenciar(nu,exp){
    return num**exp
  }
  raizCuadrada(num1) {
    return Math.sqrt(num)
  }
  raizCuadrada(num1) {
    return Math.cbrt(num)
  }
}
const calculadora = new calculadora();
let op = prompt(
  "elija una operación: 1: suma, 2: resta, 3, multiplicación, 4: división, 5: potenciación"
);
let numero1 = prompt("Ingrese primer número/dividendo/Numero a potenciar u obtener raiz");
let numero2 = prompt("Ingrese segundo número/Divisor/no necesario en raiz");

if (op == 1) {
  let result = calculadora.sumar(numero1, numero2);
  alert(`el resultado es: ${result}`);
} else if (op == 2) {
  let result = calculadora.restar(numero1, numero2);
  alert(`el resultado es: ${result}`);
} else if (op == 3) {
  let result = calculadora.multiplicar(numero1, numero2);
  alert(`el resultado es: ${result}`);
} else if (op == 4) {
  let result = calculadora.dividir(numero1, numero2);
  alert(`el resultado es: ${result}`);
} else if(op == 5) {
  let result = calculadora.potenciar(numero1,numero2)
  alert(`el resultado es: ${result}`);
}else if(op == 6) {
  let result = calculadora.raizCuadrada(numero1)
alert(`el resultado es: ${result}`);
}
else if(op == 7) {
  let result = calculadora.raizCubica(numero1)
  alert(`el resultado es: ${result}`);
}
