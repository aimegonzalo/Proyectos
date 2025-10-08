// Primera parte:
//
// - Crear un sistema para mostrar las particularidades de 3 celulares
// - cada celular debe tener color, peso, resolución de pantalla, resolución de cámara y memoria ram
// - cada ccelular debe poder prender, reiniciar, apagar, tomar fotos y grabar

class celulares {
  constructor(color, peso, tamaño, rdp, rdc, ram) {
    this.color = color;
    this.peso = peso;
    this.tamaño = tamaño;
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

class Altagama extends celulares {
  constructor(color, peso, tamaño, rdp, rdc, ram, extracam) {
    super(color, peso, tamaño, rdp, rdc, ram);
    this.extracam = extracam;
  }
  camaraLenta() {
    alert("Grabando en cámara lenta");
  }
  recFacial() {
    alert("Iniciando Reconocimiento Facial");
  }
  info() {
    return super.info() + `Características extra: <b>${this.extra}</b><br>`;
  }
}

celular1 = new celulares("Rojo", "150g", "5'", "13 mpx", "full hd", "2GB");

celular2 = new celulares("Azul", "100g", "4.5'", "4k", "4GB");

celular3 = new celulares("Negro", "180g", "6'", "full hd", "6GB");

celularAg1 = new Altagama("Negro", "100g", "5'", "24 mpx", "4k", "32 GB");

celularAg2 = new Altagama("Gris", "100g", "5'", "26 mpx", "4k ", "16 GB");

const celuinfo = document.querySelector(".celuinfo p");
celuinfo.innerHTML =
  celular1.info() +
  "<br></br>" +
  celular2.info() +
  "<br></br>" +
  celular3.info() +
  "<br></br>" +
  celularAg1.info() +
  "<br></br>" +
  celularAg2.info();

// Segunda parte
// Agregar dos celulares de alta gama, estos tienen las caracteristicas de los celulares anteriores
// Pero se les suma grabado en cámara lenta, reconocimiento facial y una cámara extra...
