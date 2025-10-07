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

let dineroJuan = prompt("cuánto dinero tiene Juan?");
let dineroPedro = prompt("cuánto dinero tiene Pedro?");
let dineroLucas = prompt("cuánto dinero tiene Lucas?");

dineroJuan = parseInt(dineroJuan);

if (dineroJuan >= 0.6 && dineroJuan < 1) {
  alert("Juan puede comprar el helado 1");
  alert("y le sobra" + (dineroJuan - 0.6));
} else if (dineroJuan >= 1 && dineroJuan < 1) {
  alert("Juan puede comprar el helado 2");
  alert("y le sobra" + (dineroJuan - 1));
} else if (dineroJuan >= 1.6 && dineroJuan < 1.7) {
  alert("Juan puede comprar el helado 3");
  alert("y le sobra" + (dineroJuan - 1.6));
} else if (dineroJuan >= 1.7 && dineroJuan < 1.8) {
  alert("Juan puede comprar el helado 4");
  alert("y le sobra" + (dineroJuan - 1.7));
} else if (dineroJuan >= 1.8 && dineroJuan < 2.9) {
  alert("Juan puede comprar el helado 5");
  alert("y le sobra" + (dineroJuan - 1.8));
} else if (dineroJuan >= 2.9) {
  alert("Juan puede comprar el helado 6 o el helado 7");
  alert("y le sobra" + (dineroJuan - 2.9));
} else {
  alert("Juan No tiene suficiente dinero");
}

if (dineroPedro >= 0.6 && dineroPedro < 1) {
  alert("Pedro puede comprar el helado 1");
} else if (dineroPedro >= 1 && dineroPedro < 1.6) {
  alert("Pedro puede comprar el helado 2");
} else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
  alert("Pedro puede comprar el helado 3");
} else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
  alert("Pedro puede comprar el helado 4");
} else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
  alert("Pedro puede comprar el helado 5");
} else if (dineroPedro >= 2.9) {
  alert("Pedro puede comprar el helado 6 o el helado 7");
} else {
  alert("Pedro no tiene suficiente dinero");
}

if (dineroLucas >= 0.6 && dineroLucas < 1) {
  alert("Lucas puede comprar el helado 1");
} else if (dineroLucas >= 1 && dineroLucas < 1.6) {
  alert("Lucas puede comprar el helado 2");
} else if (dineroLucas >= 1.6 && dineroLucas < 1.7) {
  alert("Lucas puede comprar el helado 3");
} else if (dineroLucas >= 1.7 && dineroLucas < 1.8) {
  alert("Lucas puede comprar el helado 4");
} else if (dineroLucas >= 1.8 && dineroLucas < 2.9) {
  alert("Lucas puede comprar el helado 5");
} else if (dineroLucas >= 2.9) {
  alert("Lucas puede comprar el helado 6 o el helado 7");
} else {
  alert("Lucas no tiene suficiente dinero");
}
