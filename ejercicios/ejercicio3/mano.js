import { fileURLToPath } from "url";
import Baraja from "../ejercicio2/baraja.js";

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

  export default Mano;

    if (process.argv[1] === fileURLToPath(import.meta.url)) {
        let baraja = new Baraja();
        let mano = new Mano();
        baraja.mezclar();
        for (let i = 0; i < 2; i++) {
            let carta = baraja.sacarCarta();
            mano.agregarCarta(carta);
        }
        console.log(mano.cartas);
    }
  