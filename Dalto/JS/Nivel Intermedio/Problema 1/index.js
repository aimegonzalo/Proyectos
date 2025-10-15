// PARTE 1:   Despues de aprobar, Cofla se compra un mejor computador para poder programar mejor y hacer todo de una forma más optima
// pero necesita una resolución óptima para podertrabajrala

//          - Debe ser al menos full hd
//          - Cuando la esté por comprar, preguntarle si está seguro

// let alto = window.screen.availHeight;
// let ancho = window.screen.availWidth;

// comprar = confirm(`el alto es${alto}, el ancho es ${ancho}`);

// if (comprar){
//   alert("compra realizada exitosamente")
// } else{
//   alert("compra cancelada")
// }

// PARTE 2: Cofla llega a su casa, abre el navegador y aprieta F11, desde ahi se pone a navegar pero hay un problema... como ahora está en
// pantalla completa, no puede ver ni la barra de marcadores, ni el protocolo, ni la url, ni ninguna información que nos puede
// otorgar la interfaz que contiene la barra de búsqueda...

//         - Crear un sismeta que muestre los suficientes datos como para conocer el sitio web

let href = window.location.href;
let pathname = window.location.pathname;
let hostname = window.location.hostname;
let protocol = window.location.protocol;

let html = `Protocolo: <b>${protocol}</b><br>`;
html += `Hostname: <b>${hostname}</b><br>`;
html += `Pathname: <b>${pathname}</b><br>`;
html += `URL Completa: <b>${href}</b><br>`;

const titulo = document.querySelector(".titulo");
titulo.innerHTML = html;
