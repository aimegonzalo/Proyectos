// Primera parte:
//
// - Crear un sistema para mostrar las particularidades de 3 celulares
// - cada celular debe tener color, peso, resolución de pantalla, resolución de cámara y memoria ram
// - cada ccelular debe poder prender, reiniciar, apagar, tomar fotos y grabar

class celulares {
  constructor(color, peso, rdp, rdc, ram) {
    this.color = color;
    this.peso = peso;
    this.rdp = rdp;
    this.rdc = rdc;
    this.ram = ram;
    this.encendido = false;
  }
  encender() {
    if (this.encendido == true) {
      alert("el celular ya está encendido");
    } else {
      this.encendido = true;
      alert("celular encendido");
    }
  }
  apagar() {
    this.encendido = false;
    alert("celular apagado");
  }
  reiniciar() {
    if (this.encendido == true) {
      alert("reiniciando el celular");
    } else {
      alert("el celular está apagado");
    }
  }
  tomarFoto() {
    alert(`foto tomada en una resolución de: ${this.rdc}`);
  }
  grabarVideoo() {
    alert(`Grabando video en: ${this.rdc}`);
  }
  info() {
    return `color: <b>${this.color}</b></br>
    Peso: <b>${this.peso}</b></br>
    Tamaño: <b>${this.tamaño}</b></br>
    Resolución de Cámara: <b>${this.rdc}</b></br>
    Resolución de Video: <b>${this.rdp}</b></br>
    Memoria Ram: <b>${this.ram}</b></br>
    `;
  }
}

celular1 = new celulares("Rojo", "150g", "5'", "full hd", "2GB");

celular2 = new celulares("Azul", "100g", "4.5'", "4k", "4GB");

celular3 = new celulares("Negro", "180g", "6'", "full hd", "6GB");

const celuinfo = document.querySelector(".celuinfo p");
celuinfo.innerHTML = celular2.info();
