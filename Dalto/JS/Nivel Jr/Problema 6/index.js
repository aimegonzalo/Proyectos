//  Indicarle a nuestro usuario las 20 llaves posibles con sus imágenes para que la pueda seleccionar
//  Una vez seleccionada, enviar los datos al servidor y que otro programador se encargue
const contenedor = document.querySelector(".flex-container");

const crearLlave = (nombre, modelo, precio) => {
  img = "<img src='llave.png' class= 'llave'>";
  nombre = `<h2>${nombre}</h2>`;
  modelo = `<h3>${modelo}</h3>`;
  precio = `<p>Precio:<b>$${precio}</b></p>`;
  return [img, nombre, modelo, precio];
};

const changeHidden = (nombre) => {
  document.querySelector(".key-data").value = number;
};
let documentFragment = document.createDocumentFragment();
for (var i = 0; i < 20; i++) {
  let modeloRandom = Math.round(Math.random() * 10000);
  let precioRandom = Math.round(Math.random() * 10 + 30);
  let llave = crearLlave(
    `llave ${i + 1}`,
    `modelo ${modeloRandom}`,
    `${precioRandom}`
  );
  let div = document.createElement("DIV");
  div.tabIndex = i;
  div.addEventListener("click", () => {
    changeHidden(modeloRandom);
  });
  div.classList.add(`item-${i}`, "flex-item");
  div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
  documentFragment.appendChild(div);
  // contenedor.innerHTML += div;
}
contenedor.appendChild(documentFragment);
// contenedor.innerHTML = llave[0] + llave[1] + llave[2];
