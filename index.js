import prompt from "prompts";

class Carta {
  constructor(palo, valor) {
    this.palo = palo;
    this.valor = valor;
  }

  getValor() {
    if (this.valor === "A") {
      return 11;
    } else if (["J", "Q", "K"].includes(this.valor)) {
      return 10;
    } else {
      return parseInt(this.valor);
    }
  }
}

class Baraja {
  constructor() {
    this.cartas = [];

    const palos = ["corazones", "diamantes", "tréboles", "picas"];
    const valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    for (let palo of palos) {
      for (let valor of valores) {
        this.cartas.push(new Carta(palo, valor));
      }
    }
  }

  mezclar() {
    for (let i = this.cartas.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cartas[i], this.cartas[j]] = [this.cartas[j], this.cartas[i]];
    }
  }

  sacarCarta() {
    return this.cartas.pop();
  }
}

class Mano {
  constructor() {
    this.cartas = [];
  }

  agregarCarta(carta) {
    this.cartas.push(carta);
  }

  getValor() {
    let valor = 0;
    let tieneAs = false;

    for (let carta of this.cartas) {
      valor += carta.getValor();
      if (carta.valor === "A") {
        tieneAs = true;
      }
    }

    if (tieneAs && valor > 21) {
      valor -= 10;
    }

    return valor;
  }
}

class Jugador {
  constructor() {
    this.mano = new Mano();
    this.plantado = false;
  }

  agregarCarta(carta) {
    this.mano.agregarCarta(carta);
  }
  plantarse() {
    this.plantado = true;
  }

  mostrarMano(oculto=false) {
    let texto = "";
    this.mano.cartas.forEach((carta,index) => {
        if (index !== 0 && oculto) {
            texto += "?";
        } else {
            texto += `${carta.valor} de ${carta.palo}, `;
        }
        texto += " ";
    });
    return texto;
  }
}

class Juego {
  constructor() {
    this.baraja = new Baraja();
    this.baraja.mezclar();

    this.jugador = new Jugador();
    this.crupier = new Jugador();

    this.jugador.agregarCarta(this.baraja.sacarCarta());
    this.crupier.agregarCarta(this.baraja.sacarCarta());
    this.jugador.agregarCarta(this.baraja.sacarCarta());
    this.crupier.agregarCarta(this.baraja.sacarCarta());
  }

  juegoTerminado() {
    return this.jugador.mano.getValor() > 21 || this.crupier.mano.getValor() > 21
      || this.jugador.mano.cartas.length === 5 || this.crupier.mano.cartas.length === 5;
  }

  jugar = async () =>{
    while (!this.juegoTerminado()) {
      console.log(`El jugador tiene: ${this.jugador.mostrarMano()} (total: ${this.jugador.mano.getValor()})`);
      console.log(`El crupier tiene: ${this.crupier.mostrarMano(true)} (total: ?)`);
      const question ={
        type: "text",
        name: "opcion",
        message: "¿Quieres pedir otra carta (s) o plantarte (n)?"
      }
      if(!this.jugador.plantado){
          const response = await prompt(question);
          const opcion = response.opcion;
          if (opcion === "s") {
            this.jugador.agregarCarta(this.baraja.sacarCarta());
          }
          else{
            this.jugador.plantarse();
          }
      }

      if (this.crupier.mano.getValor() < 17 || (this.crupier.mano.getValor() < this.jugador.mano.getValor()) && this.jugador.mano.getValor() <= 21) {
        this.crupier.agregarCarta(this.baraja.sacarCarta());
      }
      else{
        this.crupier.plantarse();
      }
      if (this.jugador.plantado && this.crupier.plantado) {
        break;
      }
      

    }

    console.log(`El jugador tiene: ${this.jugador.mostrarMano()} (total: ${this.jugador.mano.getValor()})`);
    console.log(`El crupier tiene: ${this.crupier.mostrarMano()} (total: ${this.crupier.mano.getValor()})`);

    if (this.jugador.mano.getValor() > 21) {
      console.log("Has perdido");
    } else if (this.crupier.mano.getValor() > 21) {
      console.log("Has ganado");
    } else if (this.jugador.mano.getValor() > this.crupier.mano.getValor()) {
      console.log("Has ganado");
    } else if (this.crupier.mano.getValor() > this.jugador.mano.getValor()) {
      console.log("Has perdido");
    } else {
      console.log("Empate");
    }
  }
}

let juego = new Juego();
juego.jugar();