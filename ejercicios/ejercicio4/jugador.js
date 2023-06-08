import { fileURLToPath } from "url";
import Mano from "../ejercicio3/mano.js"
import Baraja from "../ejercicio2/baraja.js";

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
      let cartas = this.mano.cartas.map((carta,index) => {
        let texto = "";
          if (index !== 0 && oculto) {
              texto = "? ";
          } else {
              texto = `${carta.valor} de ${carta.palo}`;
          }
          return texto;
      });
      return cartas.join(", ");
    }
  }

    export default Jugador;

    if (process.argv[1] === fileURLToPath(import.meta.url)) {
        let baraja = new Baraja();
        let jugador = new Jugador();
        baraja.mezclar();
        for (let i = 0; i < 2; i++) {
            let carta = baraja.sacarCarta();
            jugador.agregarCarta(carta);
        }
        console.log(jugador.mostrarMano());

        let crupier = new Jugador();
        for (let i = 0; i < 2; i++) {
            let carta = baraja.sacarCarta();
            crupier.agregarCarta(carta);
        }
        console.log(crupier.mostrarMano(true));
    }